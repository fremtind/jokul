module.exports = {
    coverageDirectory: "coverage",
    coverageReporters: ["text", "clover", "github-actions"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        "^nanoid$": require.resolve("nanoid"),
    },
    roots: ["./packages", "./portal"],
    testEnvironment: "jsdom",

    // Transpile patched NRK components
    // TODO: Remove when using unpatched versions again
    // see https://github.com/fremtind/jokul/issues/1215
    transformIgnorePatterns: ["node_modules/(?!(@nrk/core-datepicker)/)"],

    testMatch: ["**/*.test.+(ts|tsx|js)"],
    setupFilesAfterEnv: ["./jest/setupTests.ts"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
