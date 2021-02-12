<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', fn () =>inertia('private/home'))->name('home');

    Route::get('/accounts', fn () =>inertia('private/accounts'))->name('accounts');

    Route::group(['prefix' => 'profile'], function () {
        Route::name('profile')->group(function () {
            $path = "private/profile";
            Route::get('/', fn () =>inertia($path));
            Route::get('/security', fn () =>inertia("$path/security"))->name('.security');
        });
    });

    Route::get('/settings', fn () =>view('dashboard') /*inertia('Home')*/)->name('settings');
});
