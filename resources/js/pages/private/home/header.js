import { Flex, Portal } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Home | Arnuay</title>
            </Helmet>
            <Flex>Home</Flex>
        </Portal>
    );
};

export default Header;
