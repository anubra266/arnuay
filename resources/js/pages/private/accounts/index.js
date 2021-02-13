import React, { createRef } from "react";
import Layout from "../layout/main";
import Header from "./header";
import Actions from "./acc-actions";
import AccountsList from "./list";
import AccountsProvider from "./context";

const header = createRef();

const Accounts = (props) => {
    return (
        <AccountsProvider value={props}>
            <Header portal={header} />
            <Actions />
            <AccountsList {...props} />
        </AccountsProvider>
    );
};

Accounts.layout = (page) => <Layout ref={header} children={page} />;
export default Accounts;
