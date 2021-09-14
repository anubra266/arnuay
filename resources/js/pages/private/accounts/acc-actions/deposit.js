import React, { createRef, useState } from "react";
import Layout from "~/pages/private/layout/main";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import Header from "./header";
import { usePaymentConfig } from "./usePaymentConfig";

const header = createRef();

const Deposit = (props) => {
    const { wallet } = props;

    const [amount, setAmount] = useState(0);

    const config = usePaymentConfig(amount, "Deposit", wallet);

    const handleFlutterPayment = useFlutterwave(config);

    const handleDeposit = () => {
        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
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
                    Deposit to {wallet.name}
                </Text>
                <Flex justify="center" direction="column" sx={{ gap: 8 }}>
                    <Stack
                        as="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleDeposit();
                        }}
                    >
                        <FormControl isRequired>
                            <FormLabel fontSize="sm" fontWeight="bold">
                                Amount
                            </FormLabel>
                            <Input
                                type="number"
                                placeholder="Enter amount"
                                focusBorderColor="brand.400"
                                size="sm"
                                rounded="md"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <FormHelperText>A 2% fee is charged.</FormHelperText>
                        </FormControl>

                        <Button type="submit" colorScheme="brand" shadow="lg">
                            Deposit
                        </Button>
                    </Stack>
                </Flex>
            </Box>
        </>
    );
};

Deposit.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Deposit;
