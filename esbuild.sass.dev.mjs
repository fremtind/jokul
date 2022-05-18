// @ts-check
/**
 * Felles håndtering av vanlige plugins og loaders.
 * Importeres av de enkelte pakkenes byggscript.
 */
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import autoprefixer from "autoprefixer";
import postcss from "postcss";

/**
 * @param {{ entryPoints: string[]; outdir: string }} options
 * @example
 *  await build({
 *    entryPoints: ["./index.js"],
 *    outdir: "dist",
 *  });
 */
export async function build(options) {
    await esbuild.build({
        ...options,
        bundle: true,
        watch: true,
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
    });
}
