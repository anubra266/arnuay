import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            fontFamily: "body",
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("gray.200", "gray.900")(props),
        },
        html: {
            minH: "100%",
        },
    }),
};
export default styles;
