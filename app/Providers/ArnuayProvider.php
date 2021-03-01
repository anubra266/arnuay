<?php

namespace App\Providers;

use App\Observers\WalletObserver;
use Illuminate\Support\ServiceProvider;
use Bavix\Wallet\Models\Wallet;

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

        Wallet::observe(WalletObserver::class);
    }
}
