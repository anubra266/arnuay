import React from "react";
import {
    Box,
    Center,
    useColorModeValue as mode,
    useTheme,
    css,
} from "@chakra-ui/react";
import CInertiaLink from "@/app/chakra-inertia-link";
import Logo from "@/app/logo";
import ThemeToggle from "@/app/theme-toggle";
import { Global } from "@emotion/react";

const Layout = (props) => {
    const theme = useTheme();

    const styles = css({
        body: {
            bgGradient: mode(
                "linear(to-l, brand.400, brand.500, purple.600, purple.700)",
                ""
            ),
        },
    })(theme);
    return (
        <>
            <Global styles={styles} />
            <Box pos="relative" w="full" h="full">
                <ThemeToggle
                    pos="absolute"
                    top={5}
                    right={5}
                    variant="solid"
                    colorScheme="blue"
                />

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
                        <Logo rev h={100} alt="Arnuay Logo - Back to Home" />
                    </CInertiaLink>
                    <Box
                        rounded="md"
                        shadow="xl"
                        p={{ base: 5, md: 10 }}
                        bg={mode("white", "gray.800")}
                    >
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Layout;
