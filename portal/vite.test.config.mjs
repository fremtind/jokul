import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        extensionAlias: {
            ".js": [".js", ".ts", ".tsx"],
            ".jsx": [".jsx", ".tsx"],
        },
    },
    test: {
        environment: "jsdom",
        include: ["src/**/*.test.?(c|m)ts?(x)"],
        passWithNoTests: true,
    },
});
