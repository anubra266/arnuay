<?php

use Hashids\Hashids;

if (!function_exists('hashid')) {
    /**
     * Encode or Decode a model's Id or Hash
     * @param string $type
     * @param integer $id / $hash
     * @return string
     */
    function hashid($type, $id)
    {
        $hashids = new Hashids('arnuay', 6);
        return $type === 'e' ? $hashids->encode($id) : $hashids->decode($id)[0];
    }
}
