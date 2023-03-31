import { build } from "../../esbuild.dev.mjs";

await build([
    {
        entryPoints: ["documentation/DevServer.tsx"],
        outfile: "dist/server.js",
        platform: "node",
    },
    {
        entryPoints: ["documentation/DevClient.tsx"],
        outfile: "dist/client.js",
    },
]);
