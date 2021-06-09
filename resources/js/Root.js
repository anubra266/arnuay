import React from "react";
import { render } from "react-dom";
import { AppcreateInertiaApp } from "@inertiajs/inertia-react";
import { ChakraProvider } from "@chakra-ui/react";
import { useProgressBar } from "@/app/progress-bar";
import theme from "~/theme";
import ErrorBoundary from "react-errbo";
import Fonts from "~/theme/foundations/custom-fonts";
import "../css/app.css";
import Toasts from "./toaster";

useProgressBar();

createInertiaApp({
    resolve: (name) => import(`~/pages/${name}`),
    setup({ el, App, props }) {
        render(
            <ErrorBoundary>
                <ChakraProvider theme={theme}>
                    <Fonts />
                    <Toasts />
                    <App {...props} />
                </ChakraProvider>
            </ErrorBoundary>,
            el
        );
    },
});
