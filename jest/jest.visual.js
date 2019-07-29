const config = require("./jest.core");

module.exports = {
    ...config,
    "preset": "jest-puppeteer",
    testMatch: ["**/*.spec.+(ts|tsx|js)"],
    setupFilesAfterEnv: ["./jest-setup.js"],
};
