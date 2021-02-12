import React from "react";
import {
    Text,
    HStack,
    Icon,
    useColorModeValue as mode,
    VStack,
} from "@chakra-ui/react";
import { IoMdCash, IoMdSend } from "react-icons/io";
import { IoQrCodeSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const Action = (props) => {
    const col = mode("brand.700");

    return (
        <VStack
            py={2}
            px={4}
            color={col}
            fontSize="xs"
            textTransform="uppercase"
            fontFamily="heading"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ bg: mode("gray.200","gray.600") }}
        >
            <Icon as={props.icon} color={col} boxSize={6} />
            <Text>{props.children}</Text>
        </VStack>
    );
};
const Actions = () => {
    return (
        <HStack
            bg={mode("gray.50", "gray.700")}
            shadow="md"
            rounded="md"
            zIndex={1}
            alignSelf="center"
            maxW="90%"
            px={2}
        >
            <Action icon={FaDollarSign}>Buy</Action>
            <Action icon={IoMdCash}>Sell</Action>
            <Action icon={IoMdSend}>Send</Action>
            <Action icon={IoQrCodeSharp}>Receive</Action>
        </HStack>
    );
};

export default Actions;
