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
    plugins: ["prettier", "jsx-a11y", "react-hooks"],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: { ecmaVersion: 2018, sourceType: "module" },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off", // remove this when codebase is good an ready for it
        "@typescript-eslint/no-empty-interface": [
            "error",
            { allowSingleExtends: true }, // In some case you want to extend an empty interface. Example:  "interface Props extends RouteComponentProps"
        ],
        "@typescript-eslint/explicit-function-return-type": 0, // Explicit function return type becomes very annoying for React Function Components
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
        "@typescript-eslint/ban-ts-ignore": 0, // We use ts-ignore for modules that don't have type definition files
        "@typescript-eslint/ban-ts-comment": [
            1,
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": true,
                "ts-check": false,
                minimumDescriptionLength: 3,
            },
        ],
        "react/prop-types": 0,
        "prettier/prettier": "error",
        // check for correct use of react hooks:
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    overrides: [
        {
            files: ["**/*test.ts", "**/*test.tsx"],
            rules: {
                "@typescript-eslint/no-empty-function": "off",
            },
        },
        { files: ["**/*.spec.*"], extends: ["plugin:cypress/recommended"] },
    ],
};
