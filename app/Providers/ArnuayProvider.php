<?php

namespace App\Providers;

use App\Models\Account;
use App\Models\User;
use App\Observers\AccountObserver;
use App\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;

class ArnuayProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Account::observe(AccountObserver::class);
    }
}
