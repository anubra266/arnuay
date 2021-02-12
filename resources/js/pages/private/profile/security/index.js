import React, { Fragment, createRef } from "react";
import Layout from "~/pages/private/layout/main";
import {
    Box,
    Flex,
    Icon,
    Text,
    useColorModeValue as mode,
    HStack,
} from "@chakra-ui/react";
import Header from "./header";
import { SubMenu, MenuIcon } from "../menu";
import { CgPassword } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";
const header = createRef();

const Home = () => {
    return (
        <Fragment>
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
            {window.history.length > 1 && (
                <HStack
                    color={mode("brand.600")}
                    fontSize="md"
                    fontWeight="bold"
                    mt={5}
                    justifySelf="start"
                    onClick={() => window.history.back()}
                    cursor="pointer"
                    w={520}
                >
                    <Icon as={AiOutlineArrowLeft} />
                    <Text textTransform="uppercase">Back</Text>
                </HStack>
            )}
        </Fragment>
    );
};

Home.layout = (page) => <Layout ref={header} children={page} />;
export default Home;
