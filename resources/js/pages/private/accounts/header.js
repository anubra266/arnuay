import { Flex, Portal, Text } from "@chakra-ui/react";
import { usePage } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import { parseAmount } from "~/Helpers/string";

const Header = ({ portal }) => {
    const { netWorth } = usePage().props;
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Accounts | Arnuay</title>
            </Helmet>
            <Flex direction="column" textAlign="center" my={20}>
                <Text fontSize="3xl"> NGN {parseAmount(netWorth)}</Text>
                <Text fontSize="sm" fontWeight="normal" letterSpacing="widest">
                    Combined Accounts Value
                </Text>
            </Flex>
        </Portal>
    );
};

export default Header;
