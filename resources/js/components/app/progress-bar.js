import { InertiaProgress } from "@inertiajs/progress";

const progressBar = {
    delay: 250,

    color: "rgba(109, 40, 217,0.7)",

    includeCSS: true,

    showSpinner: true
};

//? progress bar for request loads
InertiaProgress.init(progressBar);

export const useProgressBar = () => {
    return true;
};
