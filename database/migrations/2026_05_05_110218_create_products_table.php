<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('img');
            $table->string('brand');
            $table->string('title');
            $table->decimal('rating', 3, 1)->nullable();
            $table->integer('reviews')->default(0);
            $table->decimal('sellPrice', 10, 2);
            $table->string('orders')->default('0');
            $table->string('mrp')->nullable();
            $table->integer('discount')->nullable();
            $table->string('category');
            $table->timestamps();
            
            $table->index('category');
            $table->index('rating');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};