import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import createMDX from "@next/mdx";

// portal/ -> workspace root (one level up)
const workspaceRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Produser en selvstendig ("standalone") build med kun de avhengighetene
    // som trengs for å kjøre opp den bygde siden. Da slipper vi å sende med
    // hele monorepoets `node_modules` til runner.
    output: "standalone",
    outputFileTracingRoot: workspaceRoot,
    // Ekskluder de andre pakkene spesifikt fra det resulterende bygget for å
    // unngå at Jøkul-pakken sin kildekode blir med i bygget unødvendig.
    outputFileTracingExcludes: {
        "/**": ["../packages/**"],
    },

    async rewrites() {
        return [
            {
                source: "/mp/:path*",
                destination: "https://api-eu.mixpanel.com/:path*",
            },
        ];
    },
    // Theme-builderen importerer Storybook-stories fra `packages/jokul/stories/`
    // og fontfiler fra `packages/jokul/src/`. Begge ligger utenfor `portal/`
    // — eksplisitt opt-in til ekstern-katalog kompilering trengs for at
    // builds (særlig isolerte CI-installs) skal plukke dem opp.
    experimental: {
        externalDir: true,
    },
    transpilePackages: ["@fremtind/jokul"],

    async redirects() {
        return [
            {
                source: "/",
                destination: "/komponenter",
                permanent: false,
            },
        ];
    },

    webpack: (config) => {
        // Match Storybook/Vite ESM resolution: let `.js` and `.jsx` imports
        // fall through to `.ts`/`.tsx` source files. Needed when the portal
        // imports Storybook story files that use ESM-style `.js`/`.jsx`
        // import paths.
        config.resolve = config.resolve ?? {};
        config.resolve.extensionAlias = {
            ...config.resolve.extensionAlias,
            ".js": [".js", ".ts", ".tsx"],
            ".jsx": [".jsx", ".tsx"],
        };
        return config;
    },
};

const withMdx = createMDX({});

export default withMdx(nextConfig);
