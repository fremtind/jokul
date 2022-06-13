// @ts-check
/**
 * Felles håndtering av vanlige plugins og loaders.
 * Importeres av de enkelte pakkenes byggscript.
 */
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

/**
 * @param {{ entryPoints: string[], outdir: string } | Array<{ entryPoints: string[], outdir: string }>} options - Send entrypoints til esbuild
 * @example
 *  await build({
 *    entryPoints: ["src/index.ts"],
 *    outdir: "dist",
 *  });
 */
export async function build(options) {
    const opts = Array.isArray(options) ? options : [options];
    await Promise.all(
        opts.map((o) =>
            esbuild.build({
                bundle: true,
                sourcemap: true,
                watch: process.env.ESBUILD_WATCH === "true",
                loader: { ".woff": "file", ".woff2": "file", ".jpg": "file", ".png": "file" },
                plugins: [sassPlugin()],
                ...o,
            }),
        ),
    );
}
