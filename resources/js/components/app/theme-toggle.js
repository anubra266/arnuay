import React from "react";
import {
    IconButton,
    useColorMode,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = (props) => {
    const SwitchIcon = mode(FaMoon, FaSun);
    const text = mode("dark", "light");
    const { toggleColorMode: toggleMode } = useColorMode();
    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            title={`Switch to ${text} mode`}
            variant="ghost"
            colorScheme="brand"
            onClick={toggleMode}
            icon={<SwitchIcon />}
            {...props}
        />
    );
};
export default ThemeToggle;
