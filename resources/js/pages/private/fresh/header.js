import { Flex, Portal } from "@chakra-ui/react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <InertiaHead>
                <title>Home | Arnuay</title>
            </InertiaHead>
            <Flex>Home</Flex>
        </Portal>
    );
};

export default Header;
