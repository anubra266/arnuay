import React from "react";
import { useFlashMessage } from "@/app/flash-message";

const Assets = (props) => {
    useFlashMessage();
    return props.children;
};

export default Assets;
