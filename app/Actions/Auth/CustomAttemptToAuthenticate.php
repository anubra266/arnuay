<?php

namespace App\Actions\Auth;

use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Fortify;

class CustomAttemptToAuthenticate extends AttemptToAuthenticate
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  callable  $next
     * @return mixed
     */
    public function handle($request, $next)
    {
        if (Fortify::$authenticateUsingCallback) {
            return $this->handleUsingCustomCallback($request, $next);
        }

        if ($this->guard->attempt(
            $request->only(Fortify::username(), 'password'),
            //* Override the default resolve for remember field
            $request->remember
        )) {
            return $next($request);
        }

        $this->throwFailedAuthenticationException($request);
    }
}
