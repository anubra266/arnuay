import React, { Fragment } from "react";
import {
    Box,
    SimpleGrid,
    useColorModeValue as mode,
    Avatar,
    Stack,
    Text,
} from "@chakra-ui/react";

import NewAccount from "./new-account";
export const Account = (props) => {
    return (
        <Box
            bg={mode("white", "gray.700")}
            _hover={{ bg: mode("gray.200", "gray.600") }}
            shadow="md"
            rounded="md"
            p={3}
            cursor="pointer"
            w={320}
            maxW="98%"
        >
            <Stack spacing={4} direction="row">
                <Avatar {...props} />
                <Stack spacing={1} my="auto">
                    <Text
                        fontWeight="bold"
                        color={mode("brand.600")}
                        textTransform="capitalize"
                    >
                        {props.name || props.title}
                    </Text>
                    <Text
                        fontWeight="bold"
                        color={mode("gray.600")}
                        textTransform="capitalize"
                        fontSize="xs"
                    >
                        {props.description}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
};
const Accounts = () => {
    return (
        <Fragment>
            <SimpleGrid columns={[1, null, 2]} spacing={5} mt={10}>
                <Account title="Anuoluwapo Abraham" description="NGN 18,000.00" />
                <Account name="Jolly Cafe" description="NGN 0.00" />
                <Account name="Anchor Cafe" description="NGN 1,000.00" />
                <NewAccount />
            </SimpleGrid>
        </Fragment>
    );
};

export default Accounts;
