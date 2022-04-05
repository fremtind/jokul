import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild.build({
    entryPoints: ["documentation/client.tsx"],
    bundle: true,
    outfile: "dist/client.js",
    loader: { ".woff": "file", ".woff2": "file" },
    plugins: [sassPlugin()],
});
