import React from "react";
import InlineSubMenu from "@/app/inline-submenu";
import { MdContacts } from "react-icons/md";
import { Text } from "@chakra-ui/layout";
import { useForm } from "@inertiajs/inertia-react";
import toast from "react-hot-toast";

const Address = ({ info }) => {
    const { errors, processing, post, setData } = useForm({
        address: "",
    });

    console.log(info);
    const handleSubmit = (value) => {
        if (info.address !== value) {
            const toastId = toast.loading(`Updating Address`);
            post(route("profile.pinfo.set", { field: "address" }), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(`Address updated Successfully`, {
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
                field="address"
                defaultValue={info.address}
                onChange={(v) => setData("address", v)}
                onSubmit={handleSubmit}
                isDisabled={processing}
                icon={MdContacts}
                last
            ></InlineSubMenu>
            <Text fontSize="sm" color="red.400" mx="auto">
                {errors.address}
            </Text>
        </>
    );
};

export default Address;
