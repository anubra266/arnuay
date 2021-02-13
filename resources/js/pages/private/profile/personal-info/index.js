import React, { createRef, forwardRef } from "react";
import Layout from "~/pages/private/layout/main";
import { Box, Flex, Text, useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
import Name from "./name";
const header = createRef();

const PersonalInfo = (props) => {
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
                    Personal Info
                </Text>
                <Flex justify="center" direction="column">
                    <Name {...props} />
                </Flex>
            </Box>
        </>
    );
};

PersonalInfo.layout = (page) => <Layout subpage ref={header} children={page} />;
export default PersonalInfo;
