import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Box } from "@chakra-ui/react";

const CInertiaLink = (p) => {
    const { href, as, method, ...rest } = p;
    return (
        <Link href={href || "#"} method={method || "get"}>
            <Box {...rest} as={as} />
        </Link>
    );
};

export default CInertiaLink;
