const browserList = require("./packages/browserslist-config-jkl");

module.exports = function (api) {
    // https://babeljs.io/docs/en/config-files#apicache
    // Cache the execution of this function.
    const environment = api.env(); // Will be production, test or development (process.env.NODE_ENV)
    api.cache.using(() => environment);

    const isTest = api.env("test");

    // Tests run in a node environment, so commonjs is required;
    let modules = isTest ? "commonjs" : false;

    // Tests run in a node environment
    const targets = isTest ? { node: "current" } : browserList;

    const plugins = [
        "@babel/plugin-proposal-optional-chaining",
        ["@babel/plugin-transform-runtime", { useESModules: modules !== "commonjs" }],
    ];

    return {
        plugins,
        presets: [
            ["@babel/preset-env", { bugfixes: true, targets, modules }],
            "@babel/preset-typescript",
            "@babel/preset-react",
        ],
    };
};
