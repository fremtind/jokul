import { build } from "../../esbuild.mjs";

await build([
    {
        entryPoints: ["documentation/server.tsx"],
        outfile: "dist/server.js",
        platform: "node",
    },
    {
        entryPoints: ["documentation/client.tsx"],
        outfile: "dist/client.js",
    },
]);
