import { Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Logo = (props) => {
    return (
        <Image
            src={`/logo${useColorModeValue("", "-light")}.png`}
            loading="lazy"
            {...props}
        />
    );
};

export default Logo;
