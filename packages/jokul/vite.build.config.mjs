import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
import nodeExternals from "rollup-plugin-node-externals";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

//console.log(globSync("src/**/!(*.test).{ts,tsx}"));

export default defineConfig({
    plugins: [
        nodeExternals({ deps: true, devDeps: true, peerDeps: true, optDeps: true, exclude: ["clsx"] }),
        react(),
        dts({
            include: ["src"],
            exclude: ["src/**/*.test.{ts,tsx}"],
        }),
        visualizer({
            emitFile: true,
            filename: "build-stats.html",
        }),
    ],
    build: {
        outDir: "build",
        emptyOutDir: false,
        sourcemap: true,
        lib: {
            formats: ["es", "cjs"],
            entry: resolve(__dirname, "src", "**", "*"),
        },
        rollupOptions: {
            input: Object.fromEntries(
                // https://rollupjs.org/configuration-options/#input
                globSync("src/**/!(*.test).{ts,tsx}").map((file) => [
                    relative("src", file.slice(0, file.length - extname(file).length)),
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                entryFileNames: () => {
                    return "[format]/[name].js";
                },
                plugins: [terser()],
                globals: {
                    react: "react",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
});
