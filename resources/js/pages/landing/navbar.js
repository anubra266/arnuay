import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue as mode,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useViewportScroll } from "framer-motion";
import ThemeSwitch from "@/app/theme-toggle";
import CInertiaLink from "@/app/chakra-inertia-link";
import Logo from "@/app/logo";
import { LandingContext } from "./";

export default function Gslr() {
    const { bg } = React.useContext(LandingContext);
    const mobileNav = useDisclosure();
    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    return (
        <>
            <chakra.header
                bg={bg}
                pr={{ base: 2, sm: 4 }}
                py={4}
                ref={ref}
                shadow={y > height ? "lg" : undefined}
                transition="box-shadow 0.5s ease-in-out"
                pos="fixed"
                top="0"
                zIndex="tooltip"
                left="0"
                right="0"
                w="full"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                    maxW="7xl"
                >
                    <Box ml={{ base: 4, sm: 6, lg: 8 }}>
                        <CInertiaLink
                            href="/"
                            title="Arnuay Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <Logo h={50} />
                            <VisuallyHidden>Arnuay</VisuallyHidden>
                        </CInertiaLink>
                    </Box>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={2}
                            mr={1}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <CInertiaLink
                                as={Button}
                                variant="ghost"
                                size="sm"
                                href={route("login")}
                                colorScheme="brand"
                            >
                                Sign in
                            </CInertiaLink>

                            <CInertiaLink
                                as={Button}
                                href={route("register")}
                                colorScheme="brand"
                                size="sm"
                            >
                                Get Started
                            </CInertiaLink>
                        </HStack>
                        <ThemeSwitch size="sm" />
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={mode("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />

                                <Button w="full" variant="ghost">
                                    Features
                                </Button>
                                <Button w="full" variant="ghost">
                                    Pricing
                                </Button>
                                <Button w="full" variant="ghost">
                                    Blog
                                </Button>
                                <Button w="full" variant="ghost">
                                    Company
                                </Button>
                                <Button w="full" variant="ghost">
                                    Sign in
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </>
    );
}
