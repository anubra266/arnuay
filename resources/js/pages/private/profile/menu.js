import React, { Fragment } from "react";
import {
    Box,
    useColorModeValue as mode,
    Avatar,
    Stack,
    Icon,
    Spacer,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";

export const Menu = (props) => {
    return (
        <Box
            bg={mode("white", "gray.700")}
            shadow="md"
            rounded="md"
            zIndex={1}
            alignSelf="center"
            maxW="90%"
            p={4}
            w={500}
            cursor="pointer"
            {...props}
        >
            <Stack
                spacing={4}
                direction="row"
                color={mode("brand.600")}
                alignItems="center"
            >
                <Avatar
                    icon={props.icon}
                    name={props.name}
                    bg={mode("brand.600", "gray.900")}
                />
                <Stack spacing={0}>
                    <Box
                        fontWeight="bold"
                        textTransform="capitalize"
                        fontSize="md"
                        my="auto"
                    >
                        {props.title}
                    </Box>
                    {props.description && (
                        <Box
                            fontWeight="thin"
                            textTransform="capitalize"
                            fontSize="sm"
                        >
                            {props.description}
                        </Box>
                    )}
                </Stack>
                <Spacer />
                {props.submenu && (
                    <Icon
                        as={AiOutlineArrowRight}
                        fontSize="2xl"
                        color={mode("brand.400")}
                    />
                )}
            </Stack>
            {props.children}
        </Box>
    );
};

export const MenuIcon = (props) => {
    return <Icon {...props} fontSize="2xl" color="white" />;
};

export const SubMenu = (props) => {
    const borderStyle = {
        borderBottom: "solid 1px",
        borderBottomColor: mode("gray.200", "gray.800"),
    };
    return (
        <Menu
            w="full"
            shadow="none"
            rounded="none"
            _hover={{ bg: mode("gray.200", "gray.800") }}
            submenu={props.arrow ? "1" : null}
            {...(!(props.last === "1") && borderStyle)}
            {...props}
        />
    );
};
