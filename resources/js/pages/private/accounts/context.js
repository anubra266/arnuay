import React, { createContext } from "react";

export const AccountsContext = createContext();

const AccountsProvider = (props) => {
    return <AccountsContext.Provider {...props} />;
};

export default AccountsProvider;
