import { Flex, Portal } from "@chakra-ui/react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <InertiaHead>
                <title>Profile | Arnuay</title>
            </InertiaHead>
            <Flex>Profile</Flex>
        </Portal>
    );
};

export default Header;
