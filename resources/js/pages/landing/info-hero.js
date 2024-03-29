import React from "react";
import {
    chakra,
    Box,
    useColorModeValue as mode,
    Icon,
    Image,
} from "@chakra-ui/react";
import CInertiaLink from "@/app/chakra-inertia-link";
import { LandingContext } from "./";

const InfoHero = (props) => {
    const { bg } = React.useContext(LandingContext);
    return (
        <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
            <Box maxW="7xl" mx="auto">
                <Box
                    pos="relative"
                    pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                    maxW={{ lg: "2xl" }}
                    w={{ lg: "full" }}
                    zIndex={1}
                    bg={bg}
                    border="solid 1px transparent"
                >
                    <Icon
                        display={{ base: "none", lg: "block" }}
                        position="absolute"
                        right={0}
                        top={0}
                        bottom={0}
                        h="full"
                        w={48}
                        color={bg}
                        transform="translateX(50%)"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </Icon>
                    <Box
                        mx="auto"
                        maxW={{ base: "7xl" }}
                        px={{ base: 4, sm: 6, lg: 8 }}
                        mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                    >
                        <Box
                            w="full"
                            textAlign={{ sm: "center", lg: "left" }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <chakra.h1
                                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="bold"
                                color={mode("gray.900", "white")}
                                fontFamily="heading"
                            >
                                <chakra.span
                                    display={{ base: "block", xl: "inline" }}
                                >
                                    Easier access to your{" "}
                                </chakra.span>
                                <chakra.span
                                    display={{ base: "block", xl: "inline" }}
                                    color={mode("brand.600", "brand.400")}
                                >
                                    financial services
                                </chakra.span>
                            </chakra.h1>
                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                fontSize={{ sm: "lg", md: "xl" }}
                                maxW={{ sm: "xl" }}
                                mx={{ sm: "auto", lg: 0 }}
                                color={mode("gray.700", "gray.500")}
                                fontFamily="body"
                                fontWeight="medium"
                            >
                                Giving you the freedom to make quick and easy
                                payments, earn money, spend smart, and save
                                more.
                            </chakra.p>
                            <Box
                                mt={{ base: 5, sm: 8 }}
                                display={{ sm: "flex" }}
                                justifyContent={{ sm: "center", lg: "start" }}
                                fontWeight="600"
                                fontFamily="body"
                            >
                                <Box rounded="full" shadow="md">
                                    <CInertiaLink
                                        href={route("register")}
                                        w="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        border="solid 1px transparent"
                                        fontSize={{ base: "md", md: "lg" }}
                                        rounded="md"
                                        color="white"
                                        bg="brand.600"
                                        _hover={{ bg: "brand.700" }}
                                        px={{ base: 8, md: 10 }}
                                        py={{ base: 3, md: 4 }}
                                    >
                                        Get started
                                    </CInertiaLink>
                                </Box>
                                <Box mt={[3, 0]} ml={[null, 3]}>
                                    <CInertiaLink
                                        href={route("login")}
                                        w="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        px={{ base: 8, md: 10 }}
                                        py={{ base: 3, md: 4 }}
                                        border="solid 1px transparent"
                                        fontSize={{ base: "md", md: "lg" }}
                                        rounded="md"
                                        color="brand.700"
                                        bg="brand.100"
                                        _hover={{ bg: "brand.200" }}
                                    >
                                        Sign In
                                    </CInertiaLink>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                position={{ lg: "absolute" }}
                top={{ lg: 0 }}
                bottom={{ lg: 0 }}
                right={{ lg: 0 }}
                w={{ lg: "50%" }}
            >
                <Image
                    h={[56, 72, 96, "full"]}
                    w="full"
                    fit="cover"
                    src={props.image}
                    alt={props.label}
                    loading="lazy"
                />
            </Box>
        </Box>
    );
};

export default InfoHero;
