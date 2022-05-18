// @ts-check
import esbuild from "esbuild";
import path from "path";

/**
 *
 * @param {string} outbase
 * @param {"esm" | "cjs" | "browser"} format
 * @returns
 */
const createConfig = (outbase, format) => {
    const nonMinified = {
        minify: false,
    };

    const minified = {
        minify: true,
        outExtension: { ".js": ".min.js" },
    };

    const base = {
        bundle: true,
        outdir: path.join(outbase, format),
        sourcemap: true,
        format: format !== "browser" ? format : undefined,
        target: format === "esm" ? ["esnext"] : undefined,
        external: [
            "react",
            "downshift",
            "match-sorter",
            "nanoid",
            /* /@nrk\/core/, */ "classnames",
            "@babel/runtime",
            "@fremtind/jkl-*",
        ],
    };

    return [
        {
            ...base,
            ...nonMinified,
        },
        {
            ...base,
            ...minified,
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
                createConfig(o.outdir, "browser").flatMap((br) =>
                    esbuild.build({
                        ...o,
                        ...br,
                    }),
                ),
            ]),
        );
    } catch (e) {
        process.exit(1);
    }
}
