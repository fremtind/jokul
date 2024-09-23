module.exports = {
    extends: "../../.eslintrc.js",
    rules: {
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    {
                        group: ["@fremtind/jkl-*"],
                        message: "Alle Jøkul-pakker skal importeres fra innad i @fremtind/jokul",
                    },
                ],
            },
        ],
    },
};
