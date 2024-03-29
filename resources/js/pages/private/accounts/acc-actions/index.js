import React from "react";
import { HStack, useColorModeValue as mode } from "@chakra-ui/react";
import { IoMdCash, IoMdSend } from "react-icons/io";
import { IoQrCodeSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

import Action from "./action";

const Actions = () => {
    return (
        <HStack
            bg={mode("gray.50", "gray.700")}
            shadow="md"
            rounded="md"
            zIndex={1}
            alignSelf="center"
            maxW="99%"
            px={2}
        >
            <Action icon={FaDollarSign} action="deposit">
                Deposit
            </Action>
            <Action icon={IoMdCash} action="withdraw">
                Withdraw
            </Action>
            <Action icon={IoMdSend} action="send">
                Send
            </Action>
            <Action icon={IoQrCodeSharp} action="receive">
                Receive
            </Action>
        </HStack>
    );
};

export default Actions;
