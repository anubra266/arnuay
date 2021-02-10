import React, { useState, Fragment } from "react";
import {
    Text,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    Stack,
    Button,
} from "@chakra-ui/react";
import Layout from "../layout";
import { CFormLabel, BottomLink } from "@/guest/auth";

const Register = () => {
    return (
        <Fragment>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Reset Password
            </Text>
            <Stack spacing={4}>
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
                <Button
                    type="submit"
                    colorScheme="brand"
                    isLoading={false}
                    shadow="lg"
                >
                    Send Reset Link
                </Button>
            </Stack>
            <Stack mt={5} direction="row" justifyContent="space-between">
                <BottomLink href={route("login")}>Sign In?</BottomLink>
                <BottomLink href={route("register")}>Sign Up?</BottomLink>
            </Stack>
        </Fragment>
    );
};
Register.layout = (page) => <Layout children={page} />;
export default Register;
