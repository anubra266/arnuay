import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

const overrides = {
    config,
    styles,
    colors,
};

export default extendTheme(overrides);
