<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ProductApiTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        config([
            'database.default' => 'sqlite',
            'database.connections.sqlite.database' => database_path('testing.sqlite'),
            'database.connections.sqlite.foreign_key_constraints' => true,
        ]);

        DB::purge('sqlite');
        DB::setDefaultConnection('sqlite');
        Artisan::call('migrate:fresh', ['--database' => 'sqlite']);
    }

    private function seedProducts(): void
    {
        Product::query()->create([
            'img' => '/assets/pic1.jpg',
            'brand' => 'Nike',
            'title' => 'Nike Air Zoom Run Pro',
            'rating' => 4.8,
            'reviews' => 312,
            'sellPrice' => 4599,
            'orders' => '2100',
            'mrp' => '6999',
            'discount' => 34,
            'category' => 'men',
        ]);

        Product::query()->create([
            'img' => '/assets/pic2.jpg',
            'brand' => 'Adidas',
            'title' => 'Adidas Ultraboost Street',
            'rating' => 4.2,
            'reviews' => 190,
            'sellPrice' => 5299,
            'orders' => '980',
            'mrp' => '7999',
            'discount' => 34,
            'category' => 'men',
        ]);

        Product::query()->create([
            'img' => '/assets/pic3.jpg',
            'brand' => 'Puma',
            'title' => 'Puma Velocity Nitro Women',
            'rating' => 3.9,
            'reviews' => 122,
            'sellPrice' => 4099,
            'orders' => '1300',
            'mrp' => '6099',
            'discount' => 33,
            'category' => 'women',
        ]);
    }

    public function test_get_products_returns_all_products(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/products');

        $response->assertOk();
        $response->assertJsonCount(3);
    }

    public function test_get_product_returns_404_for_missing_product(): void
    {
        $response = $this->getJson('/api/product/99999');

        $response->assertNotFound();
        $response->assertJson(['message' => 'Product not found']);
    }

    public function test_get_product_returns_requested_product(): void
    {
        $this->seedProducts();
        $product = Product::query()->first();

        $response = $this->getJson('/api/product/' . $product->id);

        $response->assertOk();
        $response->assertJsonPath('id', $product->id);
    }

    public function test_post_product_creates_product(): void
    {
        $payload = [
            'img' => '/assets/pic4.jpg',
            'brand' => 'Skechers',
            'title' => 'Skechers GoWalk Flex',
            'rating' => 4.4,
            'reviews' => 143,
            'sellPrice' => 3199,
            'orders' => '980',
            'mrp' => '4999',
            'discount' => 36,
            'category' => 'men',
        ];

        $response = $this->postJson('/api/product', $payload);

        $response->assertCreated();
        $response->assertJsonPath('title', 'Skechers GoWalk Flex');
        $this->assertDatabaseHas('products', ['title' => 'Skechers GoWalk Flex']);
    }

    public function test_get_by_category_returns_only_matching_products(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/category/men');

        $response->assertOk();
        $this->assertCount(2, $response->json());
        $this->assertSame('men', $response->json()[0]['category']);
        $this->assertSame('men', $response->json()[1]['category']);
    }

    public function test_top_rated_returns_products_with_rating_greater_or_equal_to_four_sorted_desc(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/filter/topRated');

        $response->assertOk();
        $ratings = array_map(static fn(array $item) => (float) $item['rating'], $response->json());

        foreach ($ratings as $rating) {
            $this->assertGreaterThanOrEqual(4.0, $rating);
        }

        $sorted = $ratings;
        rsort($sorted);
        $this->assertSame($sorted, $ratings);
    }

    public function test_best_sellers_returns_products_sorted_by_orders_desc(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/filter/bestSellers');

        $response->assertOk();
        $orders = array_map(static fn(array $item) => (int) $item['orders'], $response->json());
        $sorted = $orders;
        rsort($sorted);

        $this->assertSame($sorted, $orders);
    }

    public function test_search_products_filters_by_title_or_brand(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/products/search?q=nike');

        $response->assertOk();
        $this->assertCount(1, $response->json());
        $response->assertJsonPath('0.brand', 'Nike');
    }

    public function test_filter_products_applies_query_params(): void
    {
        $this->seedProducts();

        $response = $this->getJson('/api/products/filterBy?minPrice=4000&maxPrice=5500&brand=Nike&rating=4');

        $response->assertOk();
        $this->assertCount(1, $response->json());
        $response->assertJsonPath('0.brand', 'Nike');
    }

    public function test_list_products_supports_new_keyword(): void
    {
        Product::query()->create([
            'img' => '/assets/pic1.jpg',
            'brand' => 'Nike',
            'title' => 'Older Product',
            'rating' => 4.1,
            'reviews' => 20,
            'sellPrice' => 1000,
            'orders' => '10',
            'mrp' => '1200',
            'discount' => 20,
            'category' => 'men',
            'created_at' => now()->subDay(),
            'updated_at' => now()->subDay(),
        ]);

        Product::query()->create([
            'img' => '/assets/pic2.jpg',
            'brand' => 'Adidas',
            'title' => 'Newest Product',
            'rating' => 4.7,
            'reviews' => 44,
            'sellPrice' => 2500,
            'orders' => '12',
            'mrp' => '3000',
            'discount' => 17,
            'category' => 'men',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $response = $this->getJson('/api/products/new');

        $response->assertOk();
        $response->assertJsonPath('0.title', 'Newest Product');
    }

    public function test_list_products_supports_comma_separated_ids(): void
    {
        $this->seedProducts();

        $ids = Product::query()->pluck('id')->take(2)->implode(',');
        $response = $this->getJson('/api/products/' . $ids);

        $response->assertOk();
        $this->assertCount(2, $response->json());
    }
}
