import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { useToast } from "@chakra-ui/react";

export const useFlashMessage = () => {
    const { flash } = usePage().props;
    const toast = useToast();

    const display = ([title, body], status) => {
        toast({
            title: title,
            description: body,
            status: status,
            duration: 5000,
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
