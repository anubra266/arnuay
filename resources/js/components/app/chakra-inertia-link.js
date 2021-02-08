import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Box } from "@chakra-ui/react";

const CInertiaLink = (p) => {
    const props = Object.keys(p)
        .filter((prop) => prop !== "href" && prop !== "as")
        .reduce((acc, nxt) => ((acc[nxt] = p[nxt]), acc), {});
    return (
        <InertiaLink href={p.href}>
            <Box {...props} as={p.as} />
        </InertiaLink>
    );
};

export default CInertiaLink;