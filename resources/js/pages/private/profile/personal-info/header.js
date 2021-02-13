import { Flex, Image, Portal } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Header = ({ portal }) => {
    return (
        <Portal containerRef={portal}>
            <Helmet>
                <title>Personal Info | Arnuay</title>
            </Helmet>
            <Flex>
                <Image src="/img/headers/pinfo.svg" h={250} />
            </Flex>
        </Portal>
    );
};

export default Header;
