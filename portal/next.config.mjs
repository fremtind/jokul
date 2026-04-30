import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

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
            ...(config.resolve.extensionAlias ?? {}),
            ".js": [".js", ".ts", ".tsx"],
            ".jsx": [".jsx", ".tsx"],
        };
        return config;
    },
};

const withMdx = createMDX({});

export default withMdx(nextConfig);
