module.exports = {
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
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: { ecmaVersion: 2018, sourceType: "module" },
    rules: {
        "@typescript-eslint/no-empty-interface": [
            "error",
            { allowSingleExtends: true }, // In some case you want to extend an empty interface. Example:  "interface Props extends RouteComponentProps"
        ],
        "@typescript-eslint/explicit-function-return-type": false, // Explicit function return type becomes very annoying for React Function Components
    },
};
