module.exports = {
    env: {
        jest: true,
    },
    globals: {
        page: true,
        browser: true,
        context: true,
    },
    settings: {
        react: {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            version: require("./package.json").dependencies.react,
        },
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "prettier",
        "jsx-a11y",
        "react-hooks",
        "import",
    ],
    extends: [
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: { ecmaVersion: 2018, sourceType: "module" },
    rules: {
        "react/prop-types": "off",
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "import/no-unresolved": "off",
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                "newlines-between": "never",
            },
        ],
    },
    overrides: [
        { files: ["**/*.spec.*"], extends: ["plugin:cypress/recommended"] },
    ],
};
