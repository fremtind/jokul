import glob from "glob";
import { build } from "../../esbuild.prod.mjs";

await build({
    entryPoints: glob.sync("src/**/*.@(ts|tsx)", { ignore: "src/**/*.test.@(ts|tsx)" }),
    outdir: "build",
});
