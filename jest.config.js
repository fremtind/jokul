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

    setupFilesAfterEnv: ["./jest/setupTests.ts"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
