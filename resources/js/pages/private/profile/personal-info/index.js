import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import { Box, Flex, Text, useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
import Name from "./name";
import Address from "./address";
import PhoneNumber from "./phone-number";

const header = createRef();

const PersonalInfo = (props) => {
    return (
        <>
            <Header portal={header} />
            <Box
                w={520}
                p={10}
                layerStyle="card"
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
                    Account Info
                </Text>
                <Flex justify="center" direction="column">
                    <Name {...props} />
                    <Address {...props} />
                    <PhoneNumber {...props} />
                </Flex>
            </Box>
        </>
    );
};

PersonalInfo.layout = (page) => <Layout subpage ref={header} children={page} />;
export default PersonalInfo;
