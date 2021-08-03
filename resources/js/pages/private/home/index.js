import React, { createRef } from "react";
import Layout from "../layout/main";
import {
    Box,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    VStack,
} from "@chakra-ui/react";
import Header from "./header";
const header = createRef();

const Home = ({ transactions }) => {
    console.log(transactions);

    return (
        <>
            <Header portal={header} />
            <Box
                w={500}
                p={5}
                layerStyle="card"
                shadow="md"
                rounded="md"
                zIndex={1}
                alignSelf="center"
                maxW="90%"
            >
                <h1>Transactions</h1>
                <StatGroup my="4" as={VStack}>
                    {transactions.map((transaction) => (
                        <Stat
                            key={transaction.id}
                            shadow="base"
                            w="full"
                            border="solid 1px"
                            borderColor="gray.600"
                            rounded="md"
                            p="4"
                            cursor="pointer"
                            transition=".3s ease"
                            _hover={{
                                shadow: "lg",
                            }}
                        >
                            <StatLabel textTransform="uppercase">
                                {transaction.type}
                            </StatLabel>
                            <StatNumber>{transaction.amount}</StatNumber>
                            <StatHelpText>
                                <StatArrow
                                    type={
                                        transaction.type === "deposit"
                                            ? "increase"
                                            : "decrease"
                                    }
                                />
                                {transaction.wallet.name}
                            </StatHelpText>
                        </Stat>
                    ))}
                </StatGroup>
            </Box>
        </>
    );
};

Home.layout = (page) => <Layout ref={header} children={page} />;
export default Home;
