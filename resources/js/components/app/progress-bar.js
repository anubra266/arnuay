import { InertiaProgress } from "@inertiajs/progress";

export const useProgressBar = () => {
    //? progress bar for request loads
    InertiaProgress.init({
        delay: 250,

        color: "rgba(109, 40, 217,0.7)",

        includeCSS: true,

        showSpinner: true,
    });
};
