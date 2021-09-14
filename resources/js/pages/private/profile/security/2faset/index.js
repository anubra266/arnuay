import React, { createRef, useEffect, useState } from "react";
import Layout from "~/pages/private/layout/main";
import {
    Box,
    Divider,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    List,
    ListItem,
    Stack,
    Switch,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import Header from "./header";
import { useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
const header = createRef();

const Security = () => {
    const { user } = usePage().props;
    const twoFaEnabled = user.two_factor_secret;

    const [recoveryCodes, setRecoveryCodes] = useState();
    const [qrCode, setQRCode] = useState();

    const { processing, post, delete: destroy, errors } = useForm({});

    useEffect(() => {
        if (twoFaEnabled) {
            axios.get("/user/two-factor-recovery-codes").then((response) => {
                setRecoveryCodes(response.data);
            });
            showQrCode();
        }
    }, [twoFaEnabled]);

    const showQrCode = () => {
        axios.get("/user/two-factor-qr-code").then((response) => {
            setQRCode(response.data.svg);
        });
    };
    const update2faStatus = (e) => {
        const toEnable = e.target.checked;
        if (toEnable) post("/user/two-factor-authentication");
        else destroy("/user/two-factor-authentication");
    };
    return (
        <>
            <Header portal={header} />
            <Box
                w={520}
                p={10}
                layerStyle="card"
                shadow="base"
                rounded="md"
                zIndex={1}
                alignSelf="center"
                maxW="90%"
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={mode("brand.700")}
                    textAlign="center"
                >
                    Two Factor Authentication
                </Text>
                <Flex justify="center" direction="column" css={{ gap: 8 }}>
                    <FormControl mt="4">
                        <Flex>
                            <FormLabel htmlFor="2fa">
                                {twoFaEnabled ? "Enabled" : "Disabled"}
                            </FormLabel>
                            <Switch
                                id="2fa"
                                defaultChecked={twoFaEnabled}
                                onChange={update2faStatus}
                                isReadOnly={processing}
                            />
                        </Flex>
                        <FormHelperText my="0">
                            Switch the toggle to change status
                        </FormHelperText>
                    </FormControl>
                    <Divider />
                    {twoFaEnabled && (
                        <>
                            <Text>
                                Scan this code with your authenticator app
                            </Text>
                            <span
                                dangerouslySetInnerHTML={{ __html: qrCode }}
                            />

                            <Stack>
                                <Text>
                                    Store these recovery codes in a secure
                                    password manager. They can be used to
                                    recover access to your account if your two
                                    factor authentication device is lost.
                                </Text>
                                <List
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    p="1"
                                >
                                    {recoveryCodes?.map((code) => (
                                        <ListItem key={code}>{code}</ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </>
                    )}
                </Flex>
            </Box>
        </>
    );
};

Security.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Security;
