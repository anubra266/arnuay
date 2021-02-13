import React, { createRef } from "react";
import Layout from "../layout/main";
import { RiProfileFill, RiUserSharedFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Header from "./header";

import { Menu, MenuIcon } from "./menu";
import { Stack } from "@chakra-ui/layout";
import { Inertia } from "@inertiajs/inertia";

const header = createRef();

const Profile = () => {
    return (
        <>
            <Header portal={header} />
            <Stack>
                <Menu
                    title="Security"
                    icon={<MenuIcon as={MdSecurity} />}
                    onClick={() => Inertia.get(route("profile.security"))}
                />
                <Menu
                    title="Basic Info"
                    icon={<MenuIcon as={RiProfileFill} />}
                />
                <Menu
                    title="Personal Info"
                    icon={<MenuIcon as={FaUserCircle} />}
                    onClick={() => Inertia.get(route("profile.pinfo"))}
                />
                <Menu
                    title="Sign Out"
                    icon={<MenuIcon as={RiUserSharedFill} />}
                    onClick={() => Inertia.post(route("logout"))}
                />
            </Stack>
        </>
    );
};

Profile.layout = (page) => <Layout dhead ref={header} children={page} />;
export default Profile;
