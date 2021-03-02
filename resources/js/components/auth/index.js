import React from "react";
import {
    FormLabel,
    InputRightElement,
    IconButton,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CInertiaLink from "~/components/app/chakra-inertia-link";

export const CFormLabel = (props) => {
    return <FormLabel fontSize="sm" fontWeight="bold" {...props} />;
};

export const PasswordVisibility = (props) => {
    return (
        <InputRightElement width="4.5rem">
            <IconButton
                aria-label="Toggle Password"
                variant="ghost"
                size="sm"
                colorScheme="brand"
                h="1.75rem"
                onClick={() => props.setShow((a) => !a)}
                icon={props.show ? <FaEyeSlash /> : <FaEye />}
            />
        </InputRightElement>
    );
};

export const BottomLink = (props) => (
    <CInertiaLink
        fontWeight="bold"
        color="brand.400"
        _hover={{ color: mode("brand.700", "brand.300") }}
        {...props}
    />
);
