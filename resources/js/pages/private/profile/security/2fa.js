import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { SubMenu } from "../menu";

const TwoFactorAuth = () => {
    const { user } = usePage().props;
    const twoFaEnabled = user.two_factor_secret;
    return (
        <>
            <SubMenu
                title="Two-factor authentication"
                description={twoFaEnabled ? "Enabled" : "Disabled"}
                name="2 F A"
                onClick={() => Inertia.get(route("profile.2fa"))}
            />
        </>
    );
};

export default TwoFactorAuth;
