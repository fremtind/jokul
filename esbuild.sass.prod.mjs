// @ts-check
/**
 * Felles håndtering av vanlige plugins og loaders.
 * Importeres av de enkelte pakkenes byggscript.
 */
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import cssnanoPresetLite from "cssnano-preset-lite";
import postcss from "postcss";

const base = {
    bundle: true,
    sourcemap: true,
};

/**
 * @param {{ entryPoints: string[]; outdir: string }} options
 * @example
 *  await build({
 *    entryPoints: ["./index.js"],
 *    outdir: "dist",
 *  });
 */
export async function build(options) {
    await Promise.all([
        esbuild.build({
            ...options,
            ...base,
            loader: { ".woff": "file", ".woff2": "file" },
            plugins: [
                sassPlugin({
                    cssImports: true,
                    async transform(source) {
                        const { css } = await postcss([autoprefixer]).process(source, {
                            from: undefined,
                        });
                        return css;
                    },
                }),
            ],
            minify: false,
        }),
        esbuild.build({
            ...options,
            ...base,
            loader: { ".woff": "file", ".woff2": "file" },
            plugins: [
                sassPlugin({
                    cssImports: true,
                    async transform(source) {
                        const { css } = await postcss([autoprefixer, cssnano(cssnanoPresetLite())]).process(source, {
                            from: undefined,
                        });
                        return css;
                    },
                }),
            ],
            minify: true,
            outExtension: {
                ".css": ".min.css",
            },
        }),
    ]);
}
