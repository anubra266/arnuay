import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import {
    Box,
    Button,
    Flex,
    Text,
    useClipboard,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import Header from "./header";

const header = createRef();

const Receive = (props) => {
    const { wallet } = props;
    const { hasCopied, onCopy } = useClipboard(wallet.receive_id);

    return (
        <>
            <Header portal={header} wallet={wallet} />
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
                    fontSize="xl"
                    color={mode("brand.700")}
                    textAlign="center"
                >
                    Receive to {wallet.name}
                </Text>
                <Flex justify="center" direction="column" sx={{ gap: 8 }}>
                    Give this code to your sender:{" "}
                    <Text fontWeight="bold">{wallet.receive_id}</Text>
                    <Button size="sm" onClick={onCopy} w="fit-content">
                        {hasCopied ? "Copied" : "Copy code"}
                    </Button>
                </Flex>
            </Box>
        </>
    );
};

Receive.layout = (page) => <Layout subpage ref={header} children={page} />;
export default Receive;
