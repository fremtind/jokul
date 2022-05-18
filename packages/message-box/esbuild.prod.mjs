import rimraf from "rimraf";
import { build } from "../../esbuild.sass.prod.mjs";

await build({
    entryPoints: ["./index.js"],
    outfile: "message-box.js",
});

rimraf.sync("message-box.js*");
