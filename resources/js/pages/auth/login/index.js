import React, { useState } from "react";
import {
    Text,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Checkbox,
    InputGroup,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import Layout from "../layout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BottomLink } from "~/components/auth";
import Formy from "@/app/formy";

const Login = () => {
    const [show, setShow] = useState(false);

    const handleLogin = ({ post }) => {
        post(route("login", { preserveScroll: true }));
    };
    return (
        <>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Sign in to your account
            </Text>
            <Formy
                initialValues={{
                    email: "",
                    password: "",
                    remember: true,
                }}
                onSubmit={handleLogin}
            >
                {({ email, password, remember }, { processing, errors }) => (
                    <Stack>
                        <FormControl id="email" isRequired>
                            <FormLabel fontSize="sm" fontWeight="bold">
                                Username or email
                            </FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your username or email"
                                focusBorderColor="brand.400"
                                autoFocus
                                {...email}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel fontSize="sm" fontWeight="bold">
                                Password
                            </FormLabel>
                            <InputGroup size="md">
                                <Input
                                    type={show ? "text" : "password"}
                                    placeholder="Enter your password"
                                    focusBorderColor="brand.400"
                                    autoComplete="current-password"
                                    {...password}
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
                            <Checkbox
                                defaultChecked
                                colorScheme="brand"
                                isChecked={remember.value}
                                {...remember}
                            >
                                Remember me
                            </Checkbox>
                        </FormControl>
                        <Text fontSize="sm" color="red.600" mx={3}>
                            {errors?.email}
                        </Text>
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
            <Stack mt={5} direction="row" justifyContent="space-between">
                <BottomLink href={route("password.request")}>
                    Forgot Password?
                </BottomLink>
                <BottomLink href={route("register")}>Register?</BottomLink>
            </Stack>
        </>
    );
};
Login.layout = [Layout];
export default Login;
