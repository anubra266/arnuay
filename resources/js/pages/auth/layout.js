import React from "react";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import CInertiaLink from "@/app/chakra-inertia-link";
import Logo from "@/app/logo";

const Layout = (props) => {
    return (
        <Box pos="relative" w="full" h="full">
            <Box
                pos="absolute"
                left="50%"
                transform="translateX(-50%)"
                w="md"
                maxW="90%"
                py={10}
            >
                <CInertiaLink
                    as={Center}
                    href={route("landing")}
                    mb={5}
                    fontWeight="extrabold"
                    fontSize="3xl"
                    color="brand.400"
                >
                    <Logo h={100} alt="Arnuay Logo - Back to Home" />
                </CInertiaLink>
                <Box
                    rounded="md"
                    shadow="xl"
                    p={{ base: 5, md: 10 }}
                    bg={useColorModeValue("white", "gray.800")}
                >
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
