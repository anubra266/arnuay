import React, { useState, Fragment } from "react";
import {
    Text,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    useColorModeValue,
    Stack,
    Button,
    InputGroup,
} from "@chakra-ui/react";
import Layout from "../layout";
import { CFormLabel, PasswordVisibility, BottomLink } from "@/guest/auth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    return (
        <Fragment>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Create an account
            </Text>
            <Stack as="form" action="#" spacing={4}>
                <FormControl id="email" isRequired isInvalid={false}>
                    <CFormLabel>Email</CFormLabel>
                    <FormErrorMessage>Incorrect email</FormErrorMessage>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        focusBorderColor="brand.400"
                    />
                    <FormHelperText>Enter your email address</FormHelperText>
                </FormControl>
                <FormControl id="password" isRequired isInvalid={false}>
                    <CFormLabel>Password</CFormLabel>
                    <FormErrorMessage>Incorrect password</FormErrorMessage>
                    <InputGroup size="md">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            focusBorderColor="brand.400"
                        />
                        <PasswordVisibility
                            show={showPassword}
                            setShow={setShowPassword}
                        />
                    </InputGroup>
                    <FormHelperText>Enter a secure password</FormHelperText>
                </FormControl>
                <FormControl
                    id="password_confirmation"
                    isRequired
                    isInvalid={false}
                >
                    <CFormLabel>Confirm Password</CFormLabel>
                    <FormErrorMessage>Incorrect password</FormErrorMessage>
                    <InputGroup size="md">
                        <Input
                            type={showPasswordConfirm ? "text" : "password"}
                            placeholder="Enter your password"
                            focusBorderColor="brand.400"
                        />
                        <PasswordVisibility
                            show={showPasswordConfirm}
                            setShow={setShowPasswordConfirm}
                        />
                    </InputGroup>
                    <FormHelperText>Confirm your password</FormHelperText>
                </FormControl>

                <Button
                    type="submit"
                    colorScheme="brand"
                    isLoading={false}
                    shadow="lg"
                >
                    Register
                </Button>
            </Stack>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <BottomLink href={route("login")}>Have an account?</BottomLink>
                <BottomLink href={route("password.request")}>
                    Forgot Password?
                </BottomLink>
            </Stack>
        </Fragment>
    );
};
Register.layout = (page) => <Layout children={page} />;
export default Register;
