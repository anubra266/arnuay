<?php

$router->group(['middleware' => ['auth', 'verified']], function () use ($router) {
    $router->get('/home', fn () =>view('dashboard') /*inertia('Home')*/)->name('home');
});
