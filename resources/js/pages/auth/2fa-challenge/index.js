import React, { useState } from "react";
import {
    Text,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    useColorModeValue as mode,
    FormHelperText,
} from "@chakra-ui/react";
import Layout from "../layout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BottomLink } from "~/components/auth";
import Formy from "@/app/formy";

const Login = () => {
    const [recovery, setRecovery] = useState(false);

    const handleLogin = ({ post }) => {
        post("/two-factor-challenge", { preserveScroll: true });
    };
    return (
        <>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Two Factor Challenge
            </Text>
            <Formy
                initialValues={{
                    code: "",
                    recovery_code: "",
                }}
                onSubmit={handleLogin}
            >
                {({ code, recovery_code }, { processing, errors }) => (
                    <Stack>
                        {recovery ? (
                            <>
                                <FormControl id="code" isRequired>
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Recovery Code
                                    </FormLabel>
                                    <Input
                                        placeholder="Enter recovery code"
                                        focusBorderColor="brand.400"
                                        autoComplete="one-time-code"
                                        size="md"
                                        {...recovery_code}
                                    />
                                    <FormHelperText>
                                        Please confirm access to your account by
                                        entering one of your emergency recovery
                                        codes.
                                    </FormHelperText>
                                </FormControl>
                                <Text fontSize="sm" color="red.600" mx={3}>
                                    {errors?.recovery_code}
                                </Text>
                            </>
                        ) : (
                            <>
                                <FormControl id="code" isRequired>
                                    <FormLabel fontSize="sm" fontWeight="bold">
                                        Authenticator Code
                                    </FormLabel>
                                    <Input
                                        placeholder="Enter code"
                                        focusBorderColor="brand.400"
                                        autoComplete="one-time-code"
                                        size="md"
                                        {...code}
                                    />
                                    <FormHelperText>
                                        Please confirm access to your account by
                                        entering the authentication code
                                        provided by your authenticator
                                        application.
                                    </FormHelperText>
                                </FormControl>
                                <Text fontSize="sm" color="red.600" mx={3}>
                                    {errors?.code}
                                </Text>
                            </>
                        )}

                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={processing}
                            shadow="lg"
                        >
                            Submit
                        </Button>
                    </Stack>
                )}
            </Formy>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <Text
                    fontWeight="bold"
                    color="brand.400"
                    _hover={{ color: mode("brand.700", "brand.300") }}
                    cursor="pointer"
                    onClick={() => setRecovery((r) => !r)}
                >
                    Use {recovery ? "authenticator" : "recovery"} code?
                </Text>
            </Stack>
        </>
    );
};
Login.layout = [Layout];
export default Login;
