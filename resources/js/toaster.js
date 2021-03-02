import React from "react";
import { Toaster } from "react-hot-toast";
import { useColorModeValue as mode, useToken } from "@chakra-ui/react";

const Toasts = () => {
    const [bg, col] = useToken("colors", [
        mode("", "gray.900"),
        mode("", "white"),
    ]);

    return (
        <Toaster
            toastOptions={{
                style: {
                    background: bg,
                    color: col,
                },
            }}
        />
    );
};

export default Toasts;
