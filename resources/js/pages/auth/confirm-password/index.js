import React, { useState } from "react";
import {
    Text,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
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
        post(route("password.confirm"), { preserveScroll: true });
    };
    return (
        <>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Confirm your password
            </Text>
            <Formy
                initialValues={{
                    password: "",
                }}
                onSubmit={handleLogin}
            >
                {({ password }, { processing, errors }) => (
                    <Stack>
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
                        {JSON.stringify(errors)}
                        <Text fontSize="sm" color="red.600" mx={3}>
                            {errors?.password}
                        </Text>
                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={processing}
                            shadow="lg"
                        >
                            Confirm Password
                        </Button>
                    </Stack>
                )}
            </Formy>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <BottomLink href={route("password.request")}>
                    Forgot Password?
                </BottomLink>
            </Stack>
        </>
    );
};
Login.layout = [Layout];
export default Login;
