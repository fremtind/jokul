import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vitest-config for portalens enhetstester. Theme-builder importerer JSON
// og Storybook-stories utenfor `portal/`, så vi må eksplisitt løse `.js`/
// `.jsx`-imports til `.ts`/`.tsx` (samme som `next.config.mjs` gjør).
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
    },
});
