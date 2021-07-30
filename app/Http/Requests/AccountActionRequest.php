<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccountActionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $senderWallet = $this->wallet;
        return $senderWallet->holder_id === authUser()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $walletBalance = $this->wallet->balance;
        return [
            'receiver' => 'required|exists:users,username',
            'id' => 'required',
            'amount' => ['required', 'numeric', function ($attribute, $value, $fail) use ($walletBalance) {
                if ($value > $walletBalance) {
                    $fail('The ' . $attribute . ' is above the wallet balance.');
                }
            },]
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
            'receiver.required' => 'Receiver\'s code is incomplete.',
            'receiver.exists' => 'That code does not exist.',
            'id.required' => 'That code does not exist.',
        ];
    }
}
