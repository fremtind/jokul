import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

// Denne konfigurasjonsfilen brukes for å kjøre enhetstester med Vitest
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __JOKUL_VERSION__: JSON.stringify(pkg.version),
    },
    plugins: [react()],
    test: {
        pool: "threads",
        environment: "jsdom",
        setupFiles: ["vitest-setup.js"],
        include: ["src/**/*.test.?(c|m)ts?(x)"],
    },
});
