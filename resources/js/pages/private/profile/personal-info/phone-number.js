import React from "react";
import InlineSubMenu from "@/app/inline-submenu";
import { MdContacts } from "react-icons/md";
import { Text } from "@chakra-ui/layout";
import { useForm } from "@inertiajs/inertia-react";
import toast from "react-hot-toast";

const PhoneNumber = ({ info }) => {
    const { errors, processing, post, setData } = useForm({
        phone_number: "",
    });

    const handleSubmit = (value) => {
        if (info.phone_number !== value) {
            const toastId = toast.loading(`Updating Phone number`);
            post(route("profile.pinfo.set", { field: "phone_number" }), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(`Phone number updated Successfully`, {
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
                field="phone number"
                defaultValue={info.phone_number}
                onChange={(v) => setData("phone_number", v)}
                onSubmit={handleSubmit}
                isDisabled={processing}
                icon={MdContacts}
                last
            ></InlineSubMenu>
            <Text fontSize="sm" color="red.400" mx="auto">
                {errors.phone_number}
            </Text>
        </>
    );
};

export default PhoneNumber;
