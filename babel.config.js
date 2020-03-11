const browserList = require("./packages/browserslist-config-jkl");

module.exports = function(api) {
    // https://babeljs.io/docs/en/config-files#apicache
    // Cache the execution of this function.
    const environment = api.env(); // Will be production, test or development (process.env.NODE_ENV)
    api.cache.using(() => environment);

    const isTest = api.env("test");

    // Tests run in a node environment, so commonjs is required;
    let modules = isTest ? "commonjs" : false;

    // Tests run in a node environment
    const targets = isTest ? { node: "current" } : browserList;

    const plugins = ["@babel/plugin-proposal-optional-chaining"];

    return {
        plugins,
        presets: ["@babel/preset-typescript", "@babel/preset-react", ["@babel/preset-env", { targets, modules }]],
    };
};
