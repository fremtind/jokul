module.exports = () => ({
    plugins: {
        autoprefixer: { grid: true },
        cssnano: {
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
    },
});
