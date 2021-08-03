import { usePage } from "@inertiajs/inertia-react";

export const usePaymentConfig = (amount, action, wallet) => {
    const { user, userSettings, public_key } = usePage().props;
    const config = {
        public_key: public_key,
        tx_ref: Date.now(),
        amount: amount,
        currency: "NGN",
        redirect_url: route(`accounts.${action.toLowerCase()}p`, {
            wallet: wallet.id,
        }),
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: user.email,
            phonenumber: userSettings.phone_number,
            name: userSettings.name,
        },
        customizations: {
            title: `${action} Funds`,
            description: `${action} ${amount} to ${wallet.name}`,
        },
    };
    return config;
};
