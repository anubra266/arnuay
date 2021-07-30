import React, { useState } from "react";
import {
    Text,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    Stack,
    Button,
    InputGroup,
    Box,
} from "@chakra-ui/react";
import Layout from "../layout";
import { CFormLabel, PasswordVisibility, BottomLink } from "~/components/auth";
import Formy from "@/app/formy";
import PasswordStrength from "~/components/auth/password-strength";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleRegister = ({ post }) => {
        post(route("register"), { preserveScroll: true });
    };
    return (
        <>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Create an account
            </Text>
            <Formy
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                }}
                onSubmit={handleRegister}
            >
                {(
                    { username, email, password, password_confirmation },
                    { processing, errors }
                ) => (
                    <Stack spacing={4}>
                        <FormControl
                            id="username"
                            isRequired
                            isInvalid={errors?.username}
                        >
                            <CFormLabel>Username</CFormLabel>
                            <FormErrorMessage>
                                {errors?.username}
                            </FormErrorMessage>
                            <Input
                                type="text"
                                placeholder="Enter your username"
                                focusBorderColor="brand.400"
                                autoFocus
                                {...username}
                            />
                            <FormHelperText>
                                Choose your username
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            id="email"
                            isRequired
                            isInvalid={errors?.email}
                            autoFocus
                        >
                            <CFormLabel>Email</CFormLabel>
                            <FormErrorMessage>{errors?.email}</FormErrorMessage>
                            <Input
                                type=""
                                placeholder="Enter your email"
                                focusBorderColor="brand.400"
                                {...email}
                            />
                            <FormHelperText>
                                Enter your email address
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            id="password"
                            isRequired
                            isInvalid={errors?.password}
                        >
                            <CFormLabel>Password</CFormLabel>
                            <FormErrorMessage>
                                {errors?.password}
                            </FormErrorMessage>
                            <Box
                                display={
                                    password.value.length > 0 ? "block" : "none"
                                }
                                mb={3}
                            >
                                <PasswordStrength password={password.value} />
                            </Box>
                            <InputGroup size="md">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    focusBorderColor="brand.400"
                                    {...password}
                                />
                                <PasswordVisibility
                                    show={showPassword}
                                    setShow={setShowPassword}
                                />
                            </InputGroup>
                            <FormHelperText>
                                Enter a secure password
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            id="password_confirmation"
                            isRequired
                            isInvalid={
                                password_confirmation.value !== password.value
                            }
                        >
                            <CFormLabel>Confirm Password</CFormLabel>
                            <FormErrorMessage>
                                passwords don't match
                            </FormErrorMessage>
                            <InputGroup size="md">
                                <Input
                                    type={
                                        showPasswordConfirm
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    focusBorderColor="brand.400"
                                    {...password_confirmation}
                                />
                                <PasswordVisibility
                                    show={showPasswordConfirm}
                                    setShow={setShowPasswordConfirm}
                                />
                            </InputGroup>
                            <FormHelperText>
                                Confirm your password
                            </FormHelperText>
                        </FormControl>

                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={processing}
                            shadow="lg"
                        >
                            Register
                        </Button>
                    </Stack>
                )}
            </Formy>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <BottomLink href={route("login")}>Have an account?</BottomLink>
                <BottomLink href={route("password.request")}>
                    Forgot Password?
                </BottomLink>
            </Stack>
        </>
    );
};
Register.layout = [Layout];
export default Register;
