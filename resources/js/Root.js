import React from "react";
import { render } from "react-dom";
import { App } from "@inertiajs/inertia-react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useProgressBar } from "@/app/progress-bar";
import theme from "~/theme";
import ErrorBoundary from "react-errbo";

import "../css/app.css";

useProgressBar();

const el = document.getElementById("app");
render(
    <ErrorBoundary>
        <ChakraProvider theme={theme}>
            <App
                initialPage={JSON.parse(el.dataset.page)}
                resolveComponent={(name) =>
                    import(`~/pages/${name}`).then((module) => module.default)
                }
            />
        </ChakraProvider>
    </ErrorBoundary>,
    el
);
