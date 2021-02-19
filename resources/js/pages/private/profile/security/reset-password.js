import React from "react";
import { SubMenu, MenuIcon } from "../menu";
import { CgPassword } from "react-icons/cg";

const ResetPassword = () => {
    return (
        <>
            <SubMenu
                title="Password"
                description="Last updated on 27 Jun 2018"
                icon={<MenuIcon as={CgPassword} />}
                last="1"
            />
        </>
    );
};

export default ResetPassword;
