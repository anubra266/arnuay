import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
import layerStyles from "./foundations/layerStyles";

const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
};

const overrides = {
    config,
    layerStyles,
    styles,
    colors,
    fonts,
};

export default extendTheme(overrides);
