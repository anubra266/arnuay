<?php

$router->group(['middleware' => ['auth', 'verified']], function () use ($router) {
    $router->get('/home', fn () =>inertia('private/home'))->name('home');

    $router->get('/settings', fn () =>view('dashboard') /*inertia('Home')*/)->name('settings');
});
