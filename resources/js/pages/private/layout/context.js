import React, { createContext } from "react";

export const LayoutContext = createContext();

const LayoutProvider = (props) => {
    return <LayoutContext.Provider {...props} />;
};

export default LayoutProvider;
