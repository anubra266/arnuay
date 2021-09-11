import { Inertia } from "@inertiajs/inertia";
import React from "react";
import { SubMenu } from "../menu";

const TwoFactorAuth = () => {
    return (
        <>
            <SubMenu
                title="Two-factor authentication"
                description="Disabled"
                name="2 F A"
                onClick={() => Inertia.get(route("profile.2fa"))}
            />
        </>
    );
};

export default TwoFactorAuth;
