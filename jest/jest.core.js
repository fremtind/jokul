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
    notify: true,
    notifyMode: "always",
    roots: ["../packages"],
    setupFilesAfterEnv: ["./setupTests.ts"],
};
