/**
 * Felles håndtering av vanlige plugins og loaders.
 * Importeres av de enkelte pakkenes byggscript.
 */
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    const watch = process.env.ESBUILD_WATCH === "true";
    await Promise.all(
        opts.map(async (o) => {
            const buildOptions = {
                bundle: true,
                sourcemap: true,
                loader: { ".woff": "file", ".woff2": "file", ".jpg": "file", ".png": "file" },
                plugins: [
                    sassPlugin({
                        loadPaths: ["node_modules"],
                    }),
                ],
                ...o,
            };
            if (watch) {
                const context = await esbuild.context(buildOptions);
                return context.watch();
            }
            return esbuild.build(buildOptions);
        }),
    );
}
