import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import copyJklFonts from "../../utils/vite/copy-jkl-fonts";

export default defineConfig({
    plugins: [react(), copyJklFonts(resolve(__dirname, "public", "fonts"))],
});
