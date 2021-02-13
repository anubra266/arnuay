import React, { useContext, Fragment } from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue as mode,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Tooltip,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { AiOutlineMenu, AiFillBell } from "react-icons/ai";
import CInertiaLink from "@/app/chakra-inertia-link";
import ThemeSwitch from "@/app/theme-toggle";
import Logo from "@/app/logo";
import { routes } from "./routes";

import { LayoutContext } from "./context";
import { FaPowerOff } from "react-icons/fa";

const NavLink = (props) => {
    const { bg } = useContext(LayoutContext);
    const fDOMProps = Object.keys(props)
        .filter((k) => !["active", "href"].includes(k))
        .reduce((acc, nxt) => ((acc[nxt] = props[nxt]), acc), {});
    const activeStyle = {
        color: mode(bg),
    };
    return (
        <CInertiaLink
            as={Button}
            href={props.active ? "#" : props.href}
            variant={props.active ? "solid" : "ghost"}
            w="full"
            size="sm"
            textTransform="capitalize"
            pointerEvents={props.active && "none"}
            {...(props.active && activeStyle)}
            _hover={activeStyle}
            {...fDOMProps}
        />
    );
};
const Logout = () => {
    return (
        <Tooltip
            shouldWrapChildren
            hasArrow
            label="Logout"
            placement="bottom-start"
        >
            <NavLink
                as={IconButton}
                href={route("logout")}
                method="post"
                color="gray.50"
                fontSize="sm"
                icon={<FaPowerOff />}
                isRound
            >
                Logout
            </NavLink>
        </Tooltip>
    );
};
const Routes = (props) => {
    return (
        <Fragment>
            {routes.map(({ label, name, Icon }, mid) => {
                const active =
                    route().current(name) || route().current(name + ".*");
                return (
                    <NavLink
                        href={route(name)}
                        key={mid}
                        active={active}
                        leftIcon={<Icon />}
                        {...props}
                    >
                        {label}
                    </NavLink>
                );
            })}{" "}
        </Fragment>
    );
};
export default function Navbar() {
    const { bg } = useContext(LayoutContext);
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4, md: 20 }}
                py={4}
                color="gray.50"
                zIndex="tooltip"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
                    <HStack
                        display="flex"
                        spacing={3}
                        alignItems="center"
                        zIndex="popover"
                    >
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <NavLink
                                as={IconButton}
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                zIndex="tooltip"
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Routes size="md" onClick={mobileNav.onClose} />
                                <NavLink
                                    href={route("logout")}
                                    method="post"
                                    leftIcon={<FaPowerOff />}
                                >
                                    Logout
                                </NavLink>
                            </VStack>
                        </Box>
                        <HStack
                            spacing={4}
                            display="flex"
                            alignItems="center"
                            color="gray.50"
                        >
                            <CInertiaLink
                                href="/"
                                letterSpacing="widest"
                                fontSize="3xl"
                                _hover={{ color: "white" }}
                            >
                                Arnuay
                                <VisuallyHidden>Arnuay</VisuallyHidden>
                            </CInertiaLink>
                            <CInertiaLink
                                href={route("accounts")}
                                fontSize="lg"
                                opacity={0.7}
                                _hover={{ opacity: 1, color: "white" }}
                                transition="opacity 0.1s ease-in-out"
                            >
                                NGN 19,000
                            </CInertiaLink>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <HStack
                            spacing={3}
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Routes />

                            <NavLink
                                as={ThemeSwitch}
                                color="gray.50"
                                fontSize="sm"
                                isRound
                            />
                            <Logout />
                        </HStack>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}
