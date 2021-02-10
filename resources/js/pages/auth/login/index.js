import React, { useState, Fragment } from "react";
import {
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
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
import { BottomLink } from "@/guest/auth";
import Formy from "@/guest/auth/formy";
import { signin } from "~/actions/auth/login";
const Login = () => {
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState(false);

    const handleLogin = (values, setValue) => {
        signin(values, setLoading)
            .then((m) => console.log("m", m))
            .catch((errs) => {
                setErrors(errs);
                setValue("password", "");
            });
    };
    return (
        <Fragment>
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
                {({ email, password, remember }, { setValue }) => (
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
                                onChange={(e) =>
                                    setValue("remember", e.target.checked)
                                }
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
                            isLoading={loading}
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
        </Fragment>
    );
};
Login.layout = (page) => <Layout children={page} />;
export default Login;
