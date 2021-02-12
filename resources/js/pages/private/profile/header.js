import { Flex, Portal } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Profile | Arnuay</title>
            </Helmet>
            <Flex>Profile</Flex>
        </Portal>
    );
};

export default Header;
