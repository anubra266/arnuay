import { Flex, Portal, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Accounts | Arnuay</title>
            </Helmet>
            <Flex direction="column" textAlign="center" my={20}>
                <Text fontSize="3xl"> NGN 19,000</Text>
                <Text fontSize="sm" fontWeight="normal" letterSpacing="widest">
                    Combined Accounts Value
                </Text>
            </Flex>
        </Portal>
    );
};

export default Header;
