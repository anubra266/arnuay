import { Flex, Image, Portal } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Home | Arnuay</title>
            </Helmet>
            <Flex>
                <Image src="/img/headers/security.svg" h={250} />
            </Flex>
        </Portal>
    );
};

export default Header;
