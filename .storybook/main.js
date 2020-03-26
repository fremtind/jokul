module.exports = {
    addons: [
        '@storybook/preset-typescript',
        '@storybook/preset-scss',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs/preset',
            options: {
                configureJSX: true,
                sourceLoaderOptions: null,
            }
        },
    ],
    stories: ['../packages/**/*-react/documentation/*.stories.mdx'],
};
