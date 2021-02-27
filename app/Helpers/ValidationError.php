<?php

use Illuminate\Validation\ValidationException;

if (!function_exists('vError')) {
    /**
     * Get the authenticated User
     * @return \App\Models\User
     */
    function vError($err)
    {
        throw ValidationException::withMessages($err);
    }
}
