import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import nodeExternals from "rollup-plugin-node-externals";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        nodeExternals({ deps: true, devDeps: true, peerDeps: true, optDeps: true, exclude: ["clsx", "nanoid"] }),
        react(),
        dts({
            include: ["src"],
            exclude: ["src/**/*.test.{ts,tsx}", "src/components/**/documentation/*"],
            entryRoot: "./src",
            outDir: ["./build/es", "./build/cjs"],
            beforeWriteFile(filePath, content) {
                if (filePath.includes("/build/cjs")) {
                    return {
                        filePath: filePath.replace(".d.ts", ".d.cts"),
                        content: content.replace(/.js';/g, ".cjs';"),
                    };
                }
                return { filePath, content };
            },
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
            entry: resolve(__dirname, "src", "**", "*"),
        },
        rollupOptions: {
            input: Object.fromEntries(
                // https://rollupjs.org/configuration-options/#input
                globSync("src/**/!(*.test).{ts,tsx}")
                    .filter((file) => !file.includes("documentation/"))
                    .map((file) => [
                        relative("src", file.slice(0, file.length - extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: [
                {
                    format: "cjs",
                    entryFileNames: () => {
                        return "cjs/[name].cjs";
                    },
                    plugins: [terser()],
                    globals: {
                        react: "react",
                        "react-dom": "ReactDOM",
                        "react/jsx-runtime": "react/jsx-runtime",
                    },
                },
                {
                    format: "es",
                    entryFileNames: () => {
                        return "es/[name].js";
                    },
                    plugins: [terser()],
                    globals: {
                        react: "react",
                        "react-dom": "ReactDOM",
                        "react/jsx-runtime": "react/jsx-runtime",
                    },
                },
            ],
        },
    },
});
