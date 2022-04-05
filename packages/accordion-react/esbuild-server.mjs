import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild.build({
    entryPoints: ["documentation/server.tsx"],
    bundle: true,
    outfile: "dist/server.js",
    platform: "node",
    loader: { ".woff": "file", ".woff2": "file" },
    plugins: [sassPlugin()],
});
