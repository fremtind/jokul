import esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const createConfig = (entryPoints, format, target, outdir = format) => {
    const nonMinified = {
        minify: false,
    };

    const minified = {
        minify: true,
        outExtension: { ".js": ".min.js" },
    };

    const outbase = path.join(fileURLToPath(import.meta.url), "..", "lib", outdir);

    const base = {
        entryPoints,
        bundle: true,
        outdir: outbase,
        format,
        target,
        external: [
            "react",
            "downshift",
            "match-sorter",
            "nanoid",
            /* /@nrk\/core/, */ "classnames",
            /@babel\/runtime/,
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

const options = [
    ...createConfig(["packages/message-box-react/src/index.ts"], "esm", ["esnext"]),
    ...createConfig(["packages/message-box-react/src/index.ts"], "cjs", undefined),
    ...createConfig(["packages/message-box-react/src/index.ts"], undefined, undefined, "browser"),
];

options.forEach((opt) => {
    esbuild.build(opt).catch(() => process.exit(1));
});
