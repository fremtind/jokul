import { build } from "../../esbuild.prod.mjs";

await build({
    entryPoints: ["src/index.ts"],
    outdir: "build",
});
