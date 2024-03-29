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
    Slide,
    SlideFade,
} from "@chakra-ui/react";

import { Account } from "../list";
import { useAccountsContext } from "../context";
import { parseAmount } from "~/Helpers/string";
import { Inertia } from "@inertiajs/inertia";

const Action = (props) => {
    const col = mode("brand.700");
    const action = useDisclosure();
    const parseAction = () => {
        var event;
        switch (props.action) {
            case "deposit":
                event = "Deposit to";
                break;
            case "withdraw":
                event = "Withdraw from";
                break;
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
    const { accounts } = useAccountsContext();

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
                        <SlideFade in={action.isOpen} offsetY="560px">
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
                                        {accounts.map((acc, acid) => (
                                            <Account
                                                key={acid}
                                                name={acc.name}
                                                description={`NGN ${parseAmount(
                                                    acc.balance
                                                )}`}
                                                onClick={() => {
                                                    Inertia.get(
                                                        route(
                                                            `accounts.${props.action}`,
                                                            { slug: acc.slug }
                                                        )
                                                    );
                                                }}
                                            />
                                        ))}
                                        {accounts.length === 0 && (
                                            <Account
                                                name="No accounts"
                                                description="Create an account first"
                                            />
                                        )}
                                    </SimpleGrid>
                                </DrawerBody>
                            </Box>
                        </SlideFade>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
export default Action;
