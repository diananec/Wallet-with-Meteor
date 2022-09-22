/**
 *
 * @format
 */
module.exports = (ctx) => {
    // This flag is set when loading configuration by this package
    if (ctx.meteor) {
        const config = {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        };
        if (ctx.env === "production") {
            // "autoprefixer" is reported to be too slow, so we will use it only in production
            config.plugins.autoprefixer = {
                overrideBrowserslist: ["defaults"],
            };
        }
        return config;
    } else {
        return {};
    }
};
