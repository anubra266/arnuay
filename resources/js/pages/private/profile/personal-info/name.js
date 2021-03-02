import React from "react";
import InlineSubMenu from "@/app/inline-submenu";
import { MdContacts } from "react-icons/md";
import { Text } from "@chakra-ui/layout";
import { useForm } from "@inertiajs/inertia-react";
import toast from "react-hot-toast";

const Name = ({ info }) => {
    const { errors, processing, post, setData } = useForm({
        name: "",
    });

    const handleSubmit = (value) => {
        if (info.name !== value) {
            const toastId = toast.loading(`Updating Name`);
            post(route("profile.pinfo.set", { field: "name" }), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(`Name updated Successfully`, {
                        id: toastId,
                    });
                },
                onError: () => {
                    toast.error(`An error occured`, {
                        id: toastId,
                    });
                },
            });
        }
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
        </>
    );
};

export default Name;
