<?php

use Illuminate\Support\Facades\Route;

// This route serves your React app for all URLs
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');