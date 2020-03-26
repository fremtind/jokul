module.exports = {
    addons: [
        '@storybook/preset-typescript',
        '@storybook/preset-scss',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-docs/preset',
    ],
    stories: ['../packages/**/*-react/documentation/*.stories.*'],
};
