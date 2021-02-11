import React from "react";

import { AiFillHome } from "react-icons/ai";
import { FaMoneyBill, FaUser } from "react-icons/fa";
export const routes = [
    {
        label: "home",
        path: "home",
        Icon: AiFillHome,
    },
    {
        label: "accounts",
        path: "accounts",
        Icon: FaMoneyBill,
    },
    {
        label: "profile",
        path: "profile",
        Icon: FaUser,
    },
];
