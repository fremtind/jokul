// @ts-check
/** @typedef {import('jest').Config} JestConfig **/

/** @type JestConfig */
const config = {
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
    transform: {
        "^.+\\.tsx?$": "<rootDir>/esbuild.jest.js",
    },
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        "^nanoid$": require.resolve("nanoid"),
        "^.+\\.(css|scss)$": "<rootDir>/jest/identity-mapper.ts",
    },
    roots: ["./packages", "./portal"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest/setupTests.ts"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};

module.exports = config;
