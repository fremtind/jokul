import glob from "tiny-glob";
import { build } from "../../esbuild.prod.mjs";

await build({
    entryPoints: await glob("src/**/!(*.test|*.json).@(ts|tsx)"),
    outdir: "build",
});
