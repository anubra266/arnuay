import React from "react";
import { Account } from "./index";
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
    Button,
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
    const handleCreateAccount = (form) => {
        form.post(route("accounts.create"), {
            preserveScroll: true,
            onSuccess: () => {
                form.resetFields();
            },
        });
    };
    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <Formy
                        initialValues={{
                            name: "",
                        }}
                        onSubmit={handleCreateAccount}
                    >
                        {({ name }, { errors, processing, touched }) => (
                            <>
                                <DrawerHeader borderBottomWidth="1px">
                                    Create a new account
                                </DrawerHeader>
                                <DrawerBody>
                                    <Stack spacing="24px">
                                        <FormControl
                                            id="name"
                                            isInvalid={
                                                errors.name && touched.name
                                            }
                                        >
                                            <CFormLabel>Name</CFormLabel>
                                            <FormErrorMessage>
                                                {errors.name}
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
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth="1px">
                                    <Button
                                        variant="outline"
                                        mr={3}
                                        isLoading={processing}
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
