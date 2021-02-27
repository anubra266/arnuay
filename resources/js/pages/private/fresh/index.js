import React, { createRef } from "react";
import Layout from "~/pages/private/layout/main";
import { Box, useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
const header = createRef();

const Home = () => {
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
                <h1>Home</h1>
            </Box>
        </>
    );
};

Home.layout = (page) => <Layout ref={header} children={page} />;
export default Home;
