// eslint-disable-next-line @typescript-eslint/no-var-requires
const { initPlugin } = require("@frsource/cypress-plugin-visual-regression-diff/plugins");

module.exports = (on, config) => {
    initPlugin(on, config);
    return config;
};
