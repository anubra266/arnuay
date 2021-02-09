import React, { useState } from "react";
import {
    Box,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useColorModeValue,
    Stack,
    Button,
    Checkbox,
    InputGroup,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import Layout from "../layout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CInertiaLink from "@/app/chakra-inertia-link";

//TODO Ask if I can add custom attributes to components. e.g inset-y
const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <Box
            rounded="md"
            shadow="xl"
            p={{ base: 5, md: 10 }}
            bg={useColorModeValue("white", "gray.800")}
        >
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Sign in to your account
            </Text>
            <Stack as="form" action="#">
                <FormControl id="email" isRequired isInvalid={false}>
                    <FormLabel fontSize="sm" fontWeight="bold">
                        Email
                    </FormLabel>
                    <FormErrorMessage>Incorrect email</FormErrorMessage>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        focusBorderColor="brand.400"
                    />
                </FormControl>
                <FormControl id="password" isRequired isInvalid={false}>
                    <FormLabel fontSize="sm" fontWeight="bold">
                        Password
                    </FormLabel>
                    <FormErrorMessage>Incorrect password</FormErrorMessage>
                    <InputGroup size="md">
                        <Input
                            type={show ? "text" : "password"}
                            placeholder="Enter your password"
                            focusBorderColor="brand.400"
                        />
                        <InputRightElement width="4.5rem">
                            <IconButton
                                variant="ghost"
                                size="sm"
                                colorScheme="brand"
                                h="1.75rem"
                                onClick={() => setShow((a) => !a)}
                                icon={show ? <FaEyeSlash /> : <FaEye />}
                            />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <Checkbox defaultIsChecked colorScheme="brand">
                        Remember me
                    </Checkbox>
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="brand"
                    isLoading={false}
                    shadow="lg"
                >
                    Login
                </Button>
            </Stack>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <CInertiaLink href={route("password.request")}>
                    Forgot Password?
                </CInertiaLink>
                <CInertiaLink href={route("register")}>Register?</CInertiaLink>
            </Stack>
        </Box>
    );
};
Login.layout = (page) => <Layout children={page} />;
export default Login;
