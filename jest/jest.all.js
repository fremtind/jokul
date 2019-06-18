const config = require("./jest.core");

module.exports = {
    ...config,
    testMatch: ["**/*.(e2e|test).+(ts|tsx|js)"],
};
