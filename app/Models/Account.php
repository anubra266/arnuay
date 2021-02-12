<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;

class Account extends Model implements Wallet
{
    use HasFactory, HasWallet;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
