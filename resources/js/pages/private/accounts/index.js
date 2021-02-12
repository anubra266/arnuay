import React, { Fragment, createRef } from "react";
import Layout from "../layout/main";
import { useColorModeValue as mode } from "@chakra-ui/react";
import Header from "./header";
import Actions from "./acc-actions";
import Accounts from "./list";

const header = createRef();

const Home = () => {
    return (
        <Fragment>
            <Header portal={header} />
            <Actions />
            <Accounts />
        </Fragment>
    );
};

Home.layout = (page) => <Layout ref={header} children={page} />;
export default Home;
