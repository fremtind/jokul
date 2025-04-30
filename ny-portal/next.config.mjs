import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

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
