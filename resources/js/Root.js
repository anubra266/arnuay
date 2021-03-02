import React from "react";
import { render } from "react-dom";
import { App } from "@inertiajs/inertia-react";
import { ChakraProvider } from "@chakra-ui/react";
import { useProgressBar } from "@/app/progress-bar";
import theme from "~/theme";
import ErrorBoundary from "react-errbo";
import Fonts from "~/theme/foundations/custom-fonts";
import "../css/app.css";
import Toasts from "./toaster";

useProgressBar();

const el = document.getElementById("app");
render(
    <ErrorBoundary>
        <ChakraProvider theme={theme}>
            <Fonts />
            <Toasts />
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
