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
            entry: resolve("src", "**", "*"),
            name: "Component",
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime", "react-dom"],
            input: Object.fromEntries(
                glob
                    .sync("src/**/*.{ts,tsx}")
                    .map((file) => [
                        relative("src", file.slice(0, file.length - extname(file).length)),
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
