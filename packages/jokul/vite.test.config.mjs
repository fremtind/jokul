import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Denne konfigurasjonsfilen brukes for å kjøre enhetstester med Vitest
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        pool: "threads",
        environment: "jsdom",
        setupFiles: ["vitest-setup.js"],
        include: ["src/**/*.test.?(c|m)ts?(x)"],
    },
});
