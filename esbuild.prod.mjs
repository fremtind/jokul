// @ts-check
import path from "node:path";
import browserslist from "browserslist";
import esbuild from "esbuild";
import { esbuildPluginBrowserslist } from "esbuild-plugin-browserslist";

/**
 *
 * @param {string} outbase
 * @param {"esm" | "cjs"} format
 * @returns
 */
const createConfig = (outbase, format) => {
    return [
        {
            bundle: false,
            minify: false,
            outdir: path.join(outbase, format),
            sourcemap: true,
            format,
            plugins: [
                esbuildPluginBrowserslist(
                    browserslist([
                        ">0.2% in no",
                        "not ie <= 11",
                        "not dead",
                        "not op_mini all",
                    ]),
                    {
                        printUnknownTargets: false,
                    },
                ),
            ],
        },
    ];
};

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
    try {
        await Promise.all(
            opts.flatMap((o) => [
                createConfig(o.outdir, "esm").flatMap((esm) =>
                    esbuild.build({
                        ...o,
                        ...esm,
                    }),
                ),
                createConfig(o.outdir, "cjs").flatMap((cjs) =>
                    esbuild.build({
                        ...o,
                        ...cjs,
                    }),
                ),
            ]),
        );
    } catch (e) {
        process.exit(1);
    }
}
