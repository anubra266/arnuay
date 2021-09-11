import { Flex, Image, Portal } from "@chakra-ui/react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <InertiaHead>
                <title>Security | Arnuay</title>
            </InertiaHead>
            <Flex>
                <Image src="/img/headers/security.svg" h={250} />
            </Flex>
        </Portal>
    );
};

export default Header;
