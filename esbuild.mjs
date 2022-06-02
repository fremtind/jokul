/**
 * Felles håndtering av vanlige plugins og loaders.
 * Importeres av de enkelte pakkenes byggscript.
 */
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

export async function build(options) {
    let opts = options;
    if (!Array.isArray(options)) {
        opts = [opts];
    }

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
