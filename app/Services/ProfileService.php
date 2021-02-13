<?php

namespace App\Services;


class ProfileService
{

    public $infoKey = "profile.pinfo";

    public function personalInfo()
    {
        return authUser()->settings()->getMultiple(
            [
                "$this->infoKey.name",
            ],
            'Unset'
        )['profile']['pinfo'];
    }

    public function updatePersonalInfo($request, $field)
    {
        $data = $request->validated();
        authUser()->settings()->set("$this->infoKey.$field", $data[$field]);
        return ucwords($field);
    }
}
