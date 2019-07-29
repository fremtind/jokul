module.exports = {
    env: {
        jest: true,
    },
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },
    settings: {
        react: {
            version: require("./package.json").dependencies.react,
        },
    },
    parser: "@typescript-eslint/parser",
    plugins: ["jsx-a11y"],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: { ecmaVersion: 2018, sourceType: "module" },
    rules: {
        "@typescript-eslint/no-empty-interface": [
            "error",
            { allowSingleExtends: true }, // In some case you want to extend an empty interface. Example:  "interface Props extends RouteComponentProps"
        ],
        "@typescript-eslint/explicit-function-return-type": 0, // Explicit function return type becomes very annoying for React Function Components
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    },
};
