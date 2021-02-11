import { chakra, Flex, Portal } from "@chakra-ui/react";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Flex>Home</Flex>
        </Portal>
    );
};

export default Header;
