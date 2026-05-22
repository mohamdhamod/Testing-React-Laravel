<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Seed the products table with realistic demo inventory.
     */
    public function run(): void
    {
        $now = now();

        $products = [
            [
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
            ],
            [
                'img' => '/assets/pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Adidas Ultraboost Street',
                'rating' => 4.7,
                'reviews' => 268,
                'sellPrice' => 5299,
                'orders' => '1850',
                'mrp' => '7999',
                'discount' => 34,
                'category' => 'men',
            ],
            [
                'img' => '/assets/pic3.jpg',
                'brand' => 'Puma',
                'title' => 'Puma Nitro Charge X',
                'rating' => 4.5,
                'reviews' => 191,
                'sellPrice' => 3899,
                'orders' => '1320',
                'mrp' => '5799',
                'discount' => 33,
                'category' => 'men',
            ],
            [
                'img' => '/assets/pic4.jpg',
                'brand' => 'Skechers',
                'title' => 'Skechers GoWalk Flex Men',
                'rating' => 4.4,
                'reviews' => 143,
                'sellPrice' => 3199,
                'orders' => '980',
                'mrp' => '4999',
                'discount' => 36,
                'category' => 'men',
            ],
            [
                'img' => '/assets/pic5.jpg',
                'brand' => 'Reebok',
                'title' => 'Reebok Floatride Energy 5',
                'rating' => 4.3,
                'reviews' => 125,
                'sellPrice' => 2999,
                'orders' => '870',
                'mrp' => '4699',
                'discount' => 36,
                'category' => 'men',
            ],
            [
                'img' => '/assets/pic1.jpg',
                'brand' => 'Nike',
                'title' => 'Nike Winflo Women Edition',
                'rating' => 4.9,
                'reviews' => 342,
                'sellPrice' => 4899,
                'orders' => '2400',
                'mrp' => '7299',
                'discount' => 33,
                'category' => 'women',
            ],
            [
                'img' => '/assets/pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Adidas SwiftFlow Women',
                'rating' => 4.8,
                'reviews' => 295,
                'sellPrice' => 4399,
                'orders' => '1980',
                'mrp' => '6599',
                'discount' => 33,
                'category' => 'women',
            ],
            [
                'img' => '/assets/pic3.jpg',
                'brand' => 'Puma',
                'title' => 'Puma Velocity Nitro Women',
                'rating' => 4.6,
                'reviews' => 226,
                'sellPrice' => 4099,
                'orders' => '1540',
                'mrp' => '6099',
                'discount' => 33,
                'category' => 'women',
            ],
            [
                'img' => '/assets/pic4.jpg',
                'brand' => 'Skechers',
                'title' => 'Skechers Arch Fit Women',
                'rating' => 4.4,
                'reviews' => 174,
                'sellPrice' => 3399,
                'orders' => '1160',
                'mrp' => '5199',
                'discount' => 35,
                'category' => 'women',
            ],
            [
                'img' => '/assets/pic5.jpg',
                'brand' => 'ASICS',
                'title' => 'ASICS Gel-Excite Women',
                'rating' => 4.5,
                'reviews' => 159,
                'sellPrice' => 3599,
                'orders' => '1020',
                'mrp' => '5499',
                'discount' => 35,
                'category' => 'women',
            ],
            [
                'img' => '/assets/pic1.jpg',
                'brand' => 'Nike',
                'title' => 'Nike Kids Court Burst',
                'rating' => 4.7,
                'reviews' => 138,
                'sellPrice' => 2299,
                'orders' => '1270',
                'mrp' => '3499',
                'discount' => 34,
                'category' => 'child',
            ],
            [
                'img' => '/assets/pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Adidas Kids PlaySprint',
                'rating' => 4.6,
                'reviews' => 122,
                'sellPrice' => 2199,
                'orders' => '1180',
                'mrp' => '3399',
                'discount' => 35,
                'category' => 'child',
            ],
            [
                'img' => '/assets/pic3.jpg',
                'brand' => 'Puma',
                'title' => 'Puma Kids Street Runner',
                'rating' => 4.5,
                'reviews' => 111,
                'sellPrice' => 1999,
                'orders' => '990',
                'mrp' => '3099',
                'discount' => 35,
                'category' => 'child',
            ],
            [
                'img' => '/assets/pic4.jpg',
                'brand' => 'Skechers',
                'title' => 'Skechers Kids LiteStep',
                'rating' => 4.4,
                'reviews' => 97,
                'sellPrice' => 1899,
                'orders' => '860',
                'mrp' => '2899',
                'discount' => 34,
                'category' => 'child',
            ],
            [
                'img' => '/assets/pic5.jpg',
                'brand' => 'Campus',
                'title' => 'Campus Junior Flash',
                'rating' => 4.3,
                'reviews' => 84,
                'sellPrice' => 1699,
                'orders' => '740',
                'mrp' => '2599',
                'discount' => 35,
                'category' => 'child',
            ],
        ];

        $rows = array_map(function (array $product) use ($now): array {
            $product['created_at'] = $now;
            $product['updated_at'] = $now;

            return $product;
        }, $products);

        DB::table('products')->truncate();
        DB::table('products')->insert($rows);
    }
}
