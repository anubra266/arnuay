<?php


$router->inertia('/', 'landing')->name('landing');

// Auth routes here
$router->group([], base_path("routes/auth.php"));
