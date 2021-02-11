import React, { forwardRef } from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    useToken,
    Flex,
    Image,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import LayoutProvider from "../context";

const Layout = ({ children }, header) => {
    const bg = useColorModeValue("brand.600", "gray.900");
    const [svgBg] = useToken("colors", [
        useColorModeValue("gray.50", "gray.900"),
    ]);
    return (
        <LayoutProvider value={{ bg }}>
            <Box>
                <Navbar />
                <Flex
                    pos="relative"
                    w="full"
                    bg={bg}
                    color="gray.50"
                    h={{ sm: 250, md: 332 }}
                    minH={150}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        pos="relative"
                        fontWeight="extrabold"
                        fontSize="4xl"
                        ref={header}
                        w="full"
                        h="full"
                        justifyContent="center"
                        alignItems="center"
                    ></Flex>
                </Flex>
                <Box pos="relative" h="65px" bg={bg} overflow="visible">
                    <chakra.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 56"
                        w="full"
                        pos="absolute"
                        bottom={0}
                    >
                        <path
                            fillRule="evenodd"
                            d="M1440,0.507176672 L1440,56 L0,56 L0,0.507176672 C311.728076,35.5023922 551.728076,53 720,53 C888.271924,53 1128.27192,35.5023922 1440,0.507176672 Z"
                            fill={svgBg}
                        ></path>
                    </chakra.svg>
                </Box>
                <Image
                    pos="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    top={0}
                    src="/img/header-bg.png"
                    h="full"
                    w={700}
                    maxW="100%"
                    pointerEvents="none"
                />
            </Box>
            <Flex
                mt="-56px"
                alignItems="center"
                w="full"
                justifyContent="center"
            >
                {children}
            </Flex>
        </LayoutProvider>
    );
};

export default forwardRef(Layout);
