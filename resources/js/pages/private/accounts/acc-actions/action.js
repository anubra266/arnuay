import React from "react";
import {
    Text,
    Icon,
    useColorModeValue as mode,
    VStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    Box,
    SimpleGrid,
} from "@chakra-ui/react";

import { Account } from "../list";

const Action = (props) => {
    const col = mode("brand.700");
    const action = useDisclosure();
    const parseAction = () => {
        var event;
        switch (props.action) {
            case "send":
                event = "Send from";
                break;
            case "receive":
                event = "Receive to";
                break;

            default:
                break;
        }
        return event;
    };
    return (
        <>
            <VStack
                py={2}
                px={4}
                color={col}
                fontSize="xs"
                textTransform="uppercase"
                fontFamily="heading"
                fontWeight="bold"
                cursor="pointer"
                _hover={{ bg: mode("gray.200", "gray.800") }}
                onClick={action.onOpen}
            >
                <Icon as={props.icon} color={col} boxSize={6} />
                <Text>{props.children}</Text>
            </VStack>
            <Drawer
                placement="bottom"
                onClose={action.onClose}
                isOpen={action.isOpen}
            >
                <DrawerOverlay>
                    <DrawerContent
                        pos="relative"
                        bg="transparent"
                        shadow="none"
                    >
                        <Box
                            w={400}
                            maxW="99%"
                            pos="absolute"
                            left="50%"
                            bottom={0}
                            transform="translateX(-50%)"
                            shadow="md"
                            roundedTop="md"
                            bg={mode("gray.50", "gray.900")}
                        >
                            <DrawerHeader borderBottomWidth="1px">
                                {parseAction()}
                            </DrawerHeader>
                            <DrawerBody>
                                <SimpleGrid columns={1} spacing={2} mt={2}>
                                    <Account
                                        title="Anuoluwapo Abraham"
                                        description="NGN 18,000.00"
                                    />
                                    <Account
                                        name="Jolly Cafe"
                                        description="NGN 0.00"
                                    />
                                    <Account
                                        name="Anchor Cafe"
                                        description="NGN 1,000.00"
                                    />
                                </SimpleGrid>
                            </DrawerBody>
                        </Box>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
export default Action;
