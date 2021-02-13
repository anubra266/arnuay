import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import { Box, Flex, Text, useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
import { SubMenu, MenuIcon } from "../menu";
import { CgPassword } from "react-icons/cg";
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
                    <SubMenu
                        title="Two-factor authentication"
                        description="Disabled"
                        name="2 F A"
                    />
                    <SubMenu
                        title="Password"
                        description="Last updated on 27 Jun 2018"
                        icon={<MenuIcon as={CgPassword} />}
                        last="1"
                    />
                </Flex>
            </Box>
        </>
    );
};

Security.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Security;
