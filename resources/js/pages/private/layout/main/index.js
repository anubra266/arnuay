import React, { forwardRef } from "react";
import {
    chakra,
    Box,
    useColorModeValue as mode,
    useToken,
    Flex,
    Image,
    HStack,
    Icon,
    Text,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import LayoutProvider from "../context";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useFlashMessage } from "@/app/flash-message";

const Layout = ({ children, dhead, subpage }, header) => {
    const bg = mode("brand.700", "gray.800");
    const [svgBg] = useToken("colors", [mode("gray.200", "gray.900")]);
    useFlashMessage();
    return (
        <LayoutProvider value={{ bg }}>
            <Box fontFamily="fantasy" pos="relative">
                <Navbar />
                <Flex
                    pos="relative"
                    w="full"
                    bg={bg}
                    color="gray.50"
                    h={dhead && { sm: 250, md: 332 }}
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
                {dhead && (
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
                )}
                <Box pos="relative" h="65px" bg={bg} overflow="visible">
                    <chakra.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 56"
                        w="full"
                        pos="absolute"
                        bottom={-1}
                    >
                        <path
                            fillRule="evenodd"
                            d="M1440,0.507176672 L1440,56 L0,56 L0,0.507176672 C311.728076,35.5023922 551.728076,53 720,53 C888.271924,53 1128.27192,35.5023922 1440,0.507176672 Z"
                            fill={svgBg}
                        ></path>
                    </chakra.svg>
                </Box>
            </Box>
            <Flex
                mt="-56px"
                alignItems="center"
                justifyContent="center"
                w="full"
                direction="column"
                mb={10}
            >
                {children}
                {window.history.length > 1 && subpage && (
                    <Box
                        color={mode("brand.600")}
                        fontSize="md"
                        fontWeight="bold"
                        mt={5}
                        w={520}
                    >
                        <HStack mr="auto">
                            <Icon
                                cursor="pointer"
                                onClick={() => window.history.back()}
                                as={AiOutlineArrowLeft}
                            />
                            <Text
                                cursor="pointer"
                                onClick={() => window.history.back()}
                                textTransform="uppercase"
                            >
                                Back
                            </Text>
                        </HStack>
                    </Box>
                )}
            </Flex>
        </LayoutProvider>
    );
};

export default forwardRef(Layout);
