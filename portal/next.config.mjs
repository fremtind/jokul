import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

    async rewrites() {
        return [
            {
                source: "/mp/:path*",
                destination: "https://api-eu.mixpanel.com/:path*",
            },
        ];
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/komponenter",
                permanent: false,
            },
        ];
    },
};

const withMdx = createMDX({});

export default withMdx(nextConfig);
