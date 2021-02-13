import React, { Fragment } from "react";
import { useFlashMessage } from "@/app/flash-message";

const Assets = (props) => {
    useFlashMessage();
    return <Fragment {...props}></Fragment>;
};

export default Assets;
