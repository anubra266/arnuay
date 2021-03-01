import React from "react";
import InlineSubMenu from "@/app/inline-submenu";
import { MdCheck, MdContacts } from "react-icons/md";
import { Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { useForm } from "@inertiajs/inertia-react";
import { SlideFade } from "@chakra-ui/transition";

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
            <SlideFade in={recentlySuccessful} direction="bottom">
                <Text
                    fontSize="sm"
                    color="green.400"
                    textAlign="center"
                    fontWeight="bold"
                >
                    <Icon as={MdCheck} fontWeight="bold" fontSize="md" />{" "}
                    Updated successfully
                </Text>
            </SlideFade>
        </>
    );
};

export default Name;
