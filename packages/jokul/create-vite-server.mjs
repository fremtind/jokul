import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { createServer } from "vite";
import { copyJklFonts, setupDev } from "../../utils/vite/index.mjs";

async function createViteServer(componentName, customLogger) {
    const componentPath = resolve(
        process.argv[1],
        "..",
        "src",
        "components",
        componentName,
        "documentation",
    );

    return await createServer({
        mode: "development",
        configFile: false,
        plugins: [
            react(),
            copyJklFonts(resolve(componentPath, "public", "fonts")),
            setupDev(componentPath),
        ],
        resolve: {
            alias: {
                "doc-utils": resolve(
                    process.argv[1],
                    "..",
                    "..",
                    "..",
                    "utils",
                    "dev-example",
                ),
            },
        },
        root: componentPath,
        server: {
            port: 3000,
        },
        customLogger,
    });
}

export { createViteServer };

const componentName = process.argv[2];

// If a command line argument for a component is provided, start the dev-server
if (componentName) {
    const server = await createViteServer(componentName);
    await server.listen();
}
