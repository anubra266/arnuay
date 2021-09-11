<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', 'AccountController@home')->name('home');


    Route::group(['prefix' => 'accounts', 'middleware' => 'profile.setup'], function () {
        Route::name('accounts')->group(function () {
            Route::get('/', 'AccountController@index');
            Route::post('/create', 'AccountController@store')->name('.create');
            Route::get('/send/{slug}', 'AccountController@sendInfo')->name('.send');
            Route::post('/send/{wallet}', 'AccountController@send')->name('.sendp');
            Route::get('/receive/{slug}', 'AccountController@receive')->name('.receive');
            Route::get('/deposit/{slug}', 'AccountController@deposit')->name('.deposit');
            Route::get('/deposit/paid/{wallet}', 'AccountController@depositProcess')->name('.depositp');
            Route::get('/withdraw/{slug}', 'AccountController@withdraw')->name('.withdraw');
            Route::post('/withdraw/pay/{wallet}', 'AccountController@withdrawProcess')->name('.withdrawp');
        });
    });

    Route::group(['prefix' => 'profile'], function () {
        Route::name('profile')->group(function () {
            $path = "private/profile";
            Route::get('/', fn () => inertia($path));
            Route::get('/security', fn () => inertia("$path/security"))->name('.security');
            Route::get('/security/2fa', fn () => inertia("$path/security/2faset"))->name('.2fa');
            Route::get('/personal-info', 'ProfileController@personalInfo')->name('.pinfo');
            Route::post('/personal-info/{field}', 'ProfileController@updatePersonalInfo')->name('.pinfo.set');
        });
    });

    Route::get('/settings', fn () => view('dashboard') /*inertia('Home')*/)->name('settings');
});
