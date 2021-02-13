import React, { useState } from "react";
import InlineSubMenu from "@/app/inline-submenu";

import { MdContacts } from "react-icons/md";
import { setInfo } from "~/actions/profile/personal-info";
import { Text } from "@chakra-ui/layout";

const Name = ({ info }) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErr] = useState();

    const handleSubmit = (value) => {
        info.name !== value &&
            setInfo(["name", value], setLoading)
                .then(() => setErr())
                .catch((err) => setErr(err));
    };
    return (
        <>
            <InlineSubMenu
                field="name"
                defaultValue={info.name}
                onSubmit={handleSubmit}
                isDisabled={loading}
                icon={MdContacts}
                last
            ></InlineSubMenu>
            <Text fontSize="sm" color="red.400" mx="auto">
                {errors?.name}
            </Text>
        </>
    );
};

export default Name;
