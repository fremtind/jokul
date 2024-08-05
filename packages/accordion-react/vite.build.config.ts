import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react-swc";
import glob from "glob";
import nodeExternals from "rollup-plugin-node-externals";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        nodeExternals({ deps: true, devDeps: true, peerDeps: true, optDeps: true }),
        react(),
        dts({ include: ["src"], exclude: ["src/**/*.test.tsx"] }),
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
                glob
                    .sync("src/**/*[!test].{ts,tsx}")
                    .map((file) => [
                        relative("src", file.slice(0, file.length - extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: {
                entryFileNames: (chunkInfo) => {
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
