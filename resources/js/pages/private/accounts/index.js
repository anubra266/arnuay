import React, { createRef } from "react";
import Layout from "../layout/main";
import Header from "./header";
import Actions from "./acc-actions";
import AccountsList from "./list";

const header = createRef();

const Accounts = (props) => {
    return (
        <>
            <Header portal={header} />
            <Actions />
            <AccountsList {...props} />
        </>
    );
};

Accounts.layout = (page) => <Layout ref={header} children={page} />;
export default Accounts;
