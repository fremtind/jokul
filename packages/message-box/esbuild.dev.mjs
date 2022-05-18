import { build } from "../../esbuild.sass.dev.mjs";

await build({
    entryPoints: ["./index.js"],
    outfile: "message-box.js",
});
