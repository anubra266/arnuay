import { Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Logo = (props) => {
    const src = `/logo${
        props.rev ? "-white" : useColorModeValue("", "-light")
    }.png`;
    return <Image src={src} loading="lazy" {...props} />;
};

export default Logo;
