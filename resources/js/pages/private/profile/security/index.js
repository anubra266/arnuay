import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import { Box, Flex, Text, useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
import ResetPassword from "./reset-password";
import TwoFactorAuth from "./2fa";
const header = createRef();

const Security = () => {
    return (
        <>
            <Header portal={header} />
            <Box
                w={520}
                p={10}
                bg={mode("white", "gray.700")}
                shadow="base"
                rounded="md"
                zIndex={1}
                alignSelf="center"
                maxW="90%"
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={mode("brand.700")}
                    textAlign="center"
                >
                    Security
                </Text>
                <Flex justify="center" direction="column">
                    <TwoFactorAuth />
                    <ResetPassword />
                </Flex>
            </Box>
        </>
    );
};

Security.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Security;
