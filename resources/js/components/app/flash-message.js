import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import {
    createStandaloneToast,
    useColorModeValue as mode,
} from "@chakra-ui/react";

export const useFlashMessage = () => {
    const { flash } = usePage().props;
    const chakratoast = createStandaloneToast();
    const display = ([title, body], status) => {
        chakratoast({
            title: title,
            description: body,
            status: status,
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
    };

    useEffect(() => {
        Object.keys(flash).forEach((status) => {
            flash[status] && display(flash[status], status);
        });
    }, [flash]);
};
