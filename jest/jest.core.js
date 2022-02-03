/* eslint-disable */
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
    roots: ["../packages", "../portal"],
    testEnvironment: "jsdom",

    // Transpile patched NRK components
    // TODO: Remove when using unpatched versions again
    // see https://github.com/fremtind/jokul/issues/1215
    transformIgnorePatterns: [
        "node_modules/(?!(@nrk/core-toggle|@nrk/core-datepicker)/)"
    ]
};
/* eslint-enable */
