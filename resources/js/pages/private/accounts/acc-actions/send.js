import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import Header from "./header";
import Formy from "@/app/formy";

const header = createRef();

const Receive = (props) => {
    const { wallet } = props;

    const handleSend = ({ post }) => {
        post(route("accounts.send", { wallet: wallet.id }), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Header portal={header} wallet={wallet} />
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
                    fontSize="xl"
                    color={mode("brand.700")}
                    textAlign="center"
                >
                    Send from {wallet.name}
                </Text>
                <Flex justify="center" direction="column" sx={{ gap: 8 }}>
                    <Formy
                        initialValues={{
                            receiver: "anubra26623",
                            id: "3",
                            amount: 10000,
                        }}
                        onSubmit={handleSend}
                    >
                        {({ receiver, id, amount }, { processing, errors }) => (
                            <Stack>
                                <FormControl
                                    isRequired
                                    isInvalid={!!errors.receiver}
                                >
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Receiver Code
                                    </FormLabel>
                                    <Flex align="center" sx={{ gap: 4 }}>
                                        <Input
                                            type="text"
                                            placeholder="Enter receiver's username"
                                            focusBorderColor="brand.400"
                                            autoFocus
                                            size="sm"
                                            roundedLeft="md"
                                            {...receiver}
                                        />
                                        <Text>/</Text>
                                        <Input
                                            type="number"
                                            placeholder="Enter number after slash"
                                            focusBorderColor="brand.400"
                                            size="sm"
                                            roundedRight="md"
                                            onFocus={(e) => e.target.select()}
                                            {...id}
                                        />
                                    </Flex>
                                    <FormErrorMessage>
                                        {errors.receiver}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl
                                    isRequired
                                    isInvalid={!!errors.amount}
                                >
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Amount
                                    </FormLabel>
                                    <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        focusBorderColor="brand.400"
                                        size="sm"
                                        rounded="md"
                                        {...amount}
                                    />
                                    <FormErrorMessage>
                                        {errors.amount}
                                    </FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    isLoading={processing}
                                    shadow="lg"
                                >
                                    Login
                                </Button>
                            </Stack>
                        )}
                    </Formy>
                </Flex>
            </Box>
        </>
    );
};

Receive.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Receive;
