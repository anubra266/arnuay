import { mode } from "./styles-mode";

const layerStyles = {
    card: {
        ...mode("bg", "white", "gray.700"),
        shadow: "base",
    },
};
export default layerStyles;
