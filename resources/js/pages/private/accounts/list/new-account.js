import React, { useState } from "react";
import { Account } from "./";
import { IoMdAddCircle } from "react-icons/io";
import {
    Box,
    Stack,
    Icon,
    useColorModeValue as mode,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
    PinInput,
    PinInputField,
    HStack,
} from "@chakra-ui/react";
import Formy from "@/app/formy";
import { CFormLabel } from "~/components/auth";
const NewAccount = () => {
    const newAccount = useDisclosure();
    return (
        <>
            <Box onClick={newAccount.onOpen}>
                <Account
                    title="Add a new account"
                    description="Diversify your outlets"
                    bg="transparent"
                    _hover={{ bg: mode("gray.200", "gray.800") }}
                    icon={
                        <Icon
                            color={mode("brand.600", "brand.400")}
                            as={IoMdAddCircle}
                            boxSize="full"
                        />
                    }
                />
            </Box>
            <AccountForm {...newAccount} />
        </>
    );
};

export default NewAccount;

const AccountForm = ({ isOpen, onClose }) => {
    const handleCreateAccount = ({ post, data, reset, clearErrors }) => {
        post(route("accounts.create"), data).then(() => reset());
        clearErrors();
    };
    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <Formy
                        initialValues={{
                            name: "",
                            bank: "",
                            account_number: "",
                        }}
                        onSubmit={handleCreateAccount}
                    >
                        {(
                            { name, bank, account_number },
                            { setData, errors, processing }
                        ) => (
                            <>
                                <DrawerHeader borderBottomWidth="1px">
                                    Create a new account
                                </DrawerHeader>
                                <DrawerBody>
                                    <Stack spacing="24px">
                                        <FormControl
                                            id="name"
                                            isRequired
                                            isInvalid={errors?.name}
                                        >
                                            <CFormLabel>Name</CFormLabel>
                                            <FormErrorMessage>
                                                {errors?.name}
                                            </FormErrorMessage>
                                            <Input
                                                type="text"
                                                placeholder="Account name"
                                                focusBorderColor="brand.400"
                                                autoFocus
                                                {...name}
                                            />
                                            <FormHelperText>
                                                Enter Account Name
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl
                                            id="bank"
                                            isRequired
                                            isInvalid={errors?.bank}
                                        >
                                            <CFormLabel>
                                                Bank Name (For payouts)
                                            </CFormLabel>
                                            <FormErrorMessage>
                                                {errors?.bank}
                                            </FormErrorMessage>
                                            <Select
                                                id="bank"
                                                placeholder="Select Bank"
                                                onChange={bank.onChange}
                                            >
                                                <option value="ac">
                                                    Access Bank
                                                </option>
                                                <option value="gt">
                                                    GT Bank
                                                </option>
                                            </Select>
                                            <FormHelperText>
                                                Enter Account Bank
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl
                                            id="account_number"
                                            isRequired
                                            isInvalid={errors?.account_number}
                                        >
                                            <CFormLabel>
                                                Bank Account Number
                                            </CFormLabel>
                                            <FormErrorMessage>
                                                {errors?.account_number}
                                            </FormErrorMessage>
                                            <HStack>
                                                <PinInput
                                                    focusBorderColor="brand.400"
                                                    {...account_number}
                                                    onChange={(val) =>
                                                        setData(
                                                            "account_number",
                                                            val
                                                        )
                                                    }
                                                >
                                                    {Array.from(
                                                        { length: 10 },
                                                        (_, k) => (
                                                            <PinInputField
                                                                key={k}
                                                            />
                                                        )
                                                    )}
                                                </PinInput>
                                            </HStack>
                                            <FormHelperText>
                                                Enter Bank Account Number
                                            </FormHelperText>
                                        </FormControl>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth="1px">
                                    <Button
                                        variant="outline"
                                        mr={3}
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        isLoading={processing}
                                        colorScheme="brand"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </DrawerFooter>
                            </>
                        )}
                    </Formy>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};
