import {
    Box,
    SimpleGrid,
    useColorModeValue as mode,
    Avatar,
    Stack,
    Text,
} from "@chakra-ui/react";

import NewAccount from "./new-account";
import { parseAmount } from "~/Helpers/string";
export const Account = (props) => {
    const { name, title, description, ...rest } = props;
    return (
        <Box
            layerStyle="card"
            _hover={{ bg: mode("gray.300", "gray.800") }}
            shadow="md"
            rounded="md"
            p={3}
            cursor="pointer"
            w={320}
            maxW="98%"
            {...rest}
        >
            <Stack spacing={4} direction="row">
                <Avatar name={name} title={title} />
                <Stack spacing={1} my="auto">
                    <Text
                        fontWeight="bold"
                        color={mode("brand.600")}
                        textTransform="capitalize"
                    >
                        {name || title}
                    </Text>
                    <Text
                        fontWeight="normal"
                        color={mode("gray.600")}
                        textTransform="capitalize"
                        fontSize="xs"
                    >
                        {description}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
};
const Accounts = ({ accounts }) => {
    return (
        <>
            <SimpleGrid columns={[1, null, 2]} spacing={5} mt={10}>
                <NewAccount />
                {accounts.map((acc, acid) => (
                    <Account
                        key={acid}
                        name={acc.name}
                        description={`NGN ${parseAmount(acc.balance)}`}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};

export default Accounts;
