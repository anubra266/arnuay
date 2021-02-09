import React from "react";
import { Box, useColorModeValue, Center } from "@chakra-ui/react";
import CInertiaLink from "@/app/chakra-inertia-link";
import Logo from "@/app/logo";

const Layout = (props) => {
    return (
        <Box pos="fixed" w="full" h="full" bg={useColorModeValue("gray.50")}>
            <Box
                pos="absolute"
                top="50%"
                left="50%"
                w="md"
                maxW="90%"
                transform="translate(-50%,-50%)"
            >
                <CInertiaLink
                    as={Center}
                    href={route("landing")}
                    mb={5}
                    fontWeight="extrabold"
                    fontSize="3xl"
                    color="brand.400"
                >
                    <Logo h={100} />
                </CInertiaLink>
                {props.children}
            </Box>
        </Box>
    );
};

export default Layout;
