import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { copyJklFonts, setupDev } from "../../../../../../utils/vite";

export default defineConfig({
    plugins: [react(), copyJklFonts(resolve(__dirname, "public", "fonts")), setupDev(__dirname)],
});
