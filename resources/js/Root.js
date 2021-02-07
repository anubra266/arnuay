import React from "react";
import { render } from "react-dom";
import { App } from "@inertiajs/inertia-react";
import { useProgressBar } from "./components/app/progress-bar";

useProgressBar();

const el = document.getElementById("app");
render(
    <React.Fragment>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={(name) =>
                import(`~/pages/${name}`).then((module) => module.default)
            }
        />
    </React.Fragment>,
    el
);
