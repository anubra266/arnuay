const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
        resolve: {
            alias: {
                "~": path.resolve("resources/js"),
                "@": path.resolve("resources/js/components"),
            },
        },
    })
    .version()
    .disableNotifications();
