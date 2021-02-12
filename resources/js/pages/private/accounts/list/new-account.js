import React, { Fragment, useState } from "react";
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
    NumberInput,
    NumberInputField,
    Select,
    Button,
} from "@chakra-ui/react";
import Formy from "@/app/formy";
import { CFormLabel } from "~/components/auth";
const NewAccount = () => {
    const newAccount = useDisclosure();
    return (
        <Fragment>
            <Box onClick={newAccount.onOpen}>
                <Account
                    title="Add a new account"
                    description="Diversify your outlets"
                    bg={mode("white", "gray.700")}
                    _hover={{ bg: mode("gray.200", "gray.600") }}
                    icon={
                        <Icon
                            color={mode("brand.600", "gray.900")}
                            as={IoMdAddCircle}
                            boxSize="full"
                        />
                    }
                />
            </Box>
            <AccountForm {...newAccount} />
        </Fragment>
    );
};

export default NewAccount;

const AccountForm = ({ isOpen, onClose }) => {
    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState(false);

    const createAccount = (values) => {
        console.log("values", values);
    };
    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        Create a new account
                    </DrawerHeader>
                    <DrawerBody>
                        <Formy
                            initialValues={{
                                name: "",
                                bank: "",
                                account_number: "",
                            }}
                            onSubmit={createAccount}
                        >
                            {({ name, bank, account_number }) => (
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
                                            defaultValue=""
                                            placeholder="Select Bank"
                                            {...bank}
                                        >
                                            <option value="ac">
                                                Access Bank
                                            </option>
                                            <option value="gt">GT Bank</option>
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
                                        <NumberInput
                                            defaultValue={15}
                                            precision={2}
                                            focusBorderColor="brand.400"
                                            {...account_number}
                                        >
                                            <NumberInputField />
                                        </NumberInput>
                                        <FormHelperText>
                                            Enter Bank Account Number
                                        </FormHelperText>
                                    </FormControl>
                                </Stack>
                            )}
                        </Formy>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            isLoading={loading}
                            colorScheme="brand"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};
