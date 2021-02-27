import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";
import layerStyles from "./foundations/layerStyles";

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

const overrides = {
    config,
    layerStyles,
    styles,
    colors,
};

export default extendTheme(overrides);
