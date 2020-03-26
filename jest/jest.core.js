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

    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "mdx", "md"],
    notify: true,
    notifyMode: "always",
    roots: ["../packages", "../portal"],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
        "^.+\\.[jt]sx?$": "babel-jest",
        '^.+\\.stories\\.(mdx|tsx|jsx|js)$': '@storybook/addon-storyshots/injectFileName',
    }
};
/* eslint-enable */
