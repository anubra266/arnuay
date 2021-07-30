import { Flex, Portal, Text } from "@chakra-ui/react";
import { usePage, InertiaHead } from "@inertiajs/inertia-react";
import { parseAmount } from "~/Helpers/string";

const Header = ({ portal, wallet }) => {
    const { balance, name } = wallet;
    return (
        <Portal containerRef={portal}>
            <Flex direction="column" textAlign="center" my={20}>
                <Text fontSize="3xl"> NGN {balance}</Text>
                <Text fontSize="sm" fontWeight="normal" letterSpacing="widest">
                    {name}
                </Text>
            </Flex>
        </Portal>
    );
};

export default Header;
