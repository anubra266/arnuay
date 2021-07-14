import { Flex, Image, Portal } from "@chakra-ui/react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <InertiaHead>
                <title>Account Info | Arnuay</title>
            </InertiaHead>
            <Flex>
                <Image src="/img/headers/pinfo.svg" h={250} />
            </Flex>
        </Portal>
    );
};

export default Header;
