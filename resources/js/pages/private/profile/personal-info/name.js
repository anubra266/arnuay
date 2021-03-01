import React from "react";
import InlineSubMenu from "@/app/inline-submenu";
import { MdCheck, MdContacts } from "react-icons/md";
import { Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { useForm } from "@inertiajs/inertia-react";

const Name = ({ info }) => {
    const { errors, processing, recentlySuccessful, post, setData } = useForm({
        name: "",
    });

    const handleSubmit = (value) => {
        info.name !== value &&
            post(route("profile.pinfo.set", { field: "name" }), {
                preserveScroll: true,
            });
    };
    return (
        <>
            <InlineSubMenu
                field="name"
                defaultValue={info.name}
                onChange={(v) => setData("name", v)}
                onSubmit={handleSubmit}
                isDisabled={processing}
                icon={MdContacts}
                last
            ></InlineSubMenu>
            <Text fontSize="sm" color="red.400" mx="auto">
                {errors.name}
            </Text>
            {recentlySuccessful && (
                <Text fontSize="sm" color="green.400" mx="auto">
                    <Icon as={MdCheck} fontWeight="bold" fontSize="md" />{" "}
                    Updated successfully
                </Text>
            )}
        </>
    );
};

export default Name;
