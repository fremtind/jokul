import { fileURLToPath } from "node:url";
import { resolve, relative, extname } from "path";
import react from "@vitejs/plugin-react-swc";
import glob from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [react(), dts({ include: ["."] })],
    build: {
        outDir: "build",
        emptyOutDir: false,
        lib: {
            formats: ["es"],
            // Could also be a dictionary or array of multiple entry points
            entry: resolve("src", "**", "*"),
            name: "Component",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react/jsx-runtime", "react-dom"],
            input: Object.fromEntries(
                // https://rollupjs.org/configuration-options/#input
                glob.sync("src/**/*.{ts,tsx}").map((file) => [
                    // 1. The name of the entry point
                    // lib/nested/foo.js becomes nested/foo
                    relative("src", file.slice(0, file.length - extname(file).length)),
                    // 2. The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                entryFileNames: "[name].js",
                banner: `'use client';`,
                globals: {
                    react: "react",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
});
