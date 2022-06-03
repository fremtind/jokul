module.exports = {
    coverageDirectory: "coverage",
    coverageReporters: ["text", "clover"],
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

    testMatch: ["**/*.test.+(ts|tsx|js)"],
    setupFilesAfterEnv: ["./jest/setupTests.ts"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
