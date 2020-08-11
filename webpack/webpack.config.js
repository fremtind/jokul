/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, arg) => {
    const mode = arg ? arg.mode : undefined;

    return {
        entry: "./src/index.tsx",
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                envName: mode,
                                presets: [
                                    ["@babel/preset-env", { modules: false, targets: "Chrome > 80" }],
                                    "@babel/preset-typescript",
                                    ["@babel/preset-react", { runtime: "classic" }],
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1, // 1 loaders before this loader
                            },
                        },
                        "sass-loader",
                    ],
                },
            ],
        },

        plugins: [
            new BundleAnalyzerPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.html",
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[name].[contenthash].css",
            }),
        ],
    };
};
