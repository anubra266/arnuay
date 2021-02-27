<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'bank' => 'required',
            'account_number' => 'required|string|size:10',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Account\'s Name is required.',
            'bank.required' => 'You must Select a Bank',
            'account_number.required' => 'Bank Account number is required',
            'account_number.required' => 'Account Number can only have Numbers',
        ];
    }
}
