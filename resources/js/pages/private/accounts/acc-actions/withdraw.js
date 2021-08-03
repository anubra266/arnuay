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
    Select,
    Stack,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import Header from "./header";
import Formy from "@/app/formy";
import { banks } from "./banks";

const header = createRef();

const Withdraw = (props) => {
    const { wallet } = props;

    const handleWithdraw = ({ post }) => {
        post(route("accounts.withdrawp", { wallet: wallet.id }), {
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
                    Withdraw from {wallet.name}
                </Text>
                <Flex justify="center" direction="column" sx={{ gap: 8 }}>
                    <Formy
                        initialValues={{
                            amount: 0,
                            account_number: "",
                            account_bank: "",
                        }}
                        onSubmit={handleWithdraw}
                    >
                        {(
                            { amount, account_bank, account_number },
                            { processing, errors }
                        ) => (
                            <Stack>
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
                                <FormControl
                                    isRequired
                                    isInvalid={!!errors.account_number}
                                >
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Account Number
                                    </FormLabel>
                                    <Input
                                        type="number"
                                        placeholder="Enter Account Number"
                                        focusBorderColor="brand.400"
                                        size="sm"
                                        rounded="md"
                                        {...account_number}
                                    />
                                    <FormErrorMessage>
                                        {errors.account_number}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isRequired
                                    isInvalid={!!errors.account_bank}
                                >
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Bank Name
                                    </FormLabel>
                                    <Select
                                        placeholder="Select Bank Name"
                                        {...account_bank}
                                    >
                                        {banks.map((bank) => (
                                            <option
                                                value={bank.code}
                                                key={bank.id}
                                            >
                                                {bank.name}
                                            </option>
                                        ))}
                                    </Select>
                                    <FormErrorMessage>
                                        {errors.account_bank}
                                    </FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    isLoading={processing}
                                    shadow="lg"
                                >
                                    Send
                                </Button>
                            </Stack>
                        )}
                    </Formy>
                </Flex>
            </Box>
        </>
    );
};

Withdraw.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Withdraw;
