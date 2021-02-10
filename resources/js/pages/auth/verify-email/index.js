import React, { useState, Fragment } from "react";
import { Text, Stack, Button } from "@chakra-ui/react";
import Layout from "../layout";
import CInertiaLink from "@/app/chakra-inertia-link";
import { verifyEmail } from "~/actions/auth/verify-email";

const VerifyEmail = () => {
    const [loading, setLoading] = useState(false);
    const [linkSent, setLinkSent] = useState(false);

    const handleVerification = () => {
        verifyEmail(setLoading).then((res) => setLinkSent(res));
    };

    return (
        <Fragment>
            <Text fontSize="2xl" mb={5} fontWeight="extrabold">
                Verify your email.
            </Text>
            <Text my={4}>
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </Text>
            <Text
                mb={4}
                display={linkSent ? "block" : "none"}
                fontWeight="bold"
                color="green.600"
            >
                A new verification link has been sent to the email address you
                provided during registration.
            </Text>
            <Stack>
                <Button
                    colorScheme="brand"
                    isLoading={loading}
                    shadow="lg"
                    onClick={handleVerification}
                >
                    Resend Verification Email
                </Button>
                <CInertiaLink
                    as={Button}
                    method="post"
                    href={route("logout")}
                    colorScheme="red"
                    isLoading={loading}
                    shadow="lg"
                    w="full"
                >
                    Logout
                </CInertiaLink>
            </Stack>
        </Fragment>
    );
};
VerifyEmail.layout = (page) => <Layout children={page} />;
export default VerifyEmail;
