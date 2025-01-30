import { withPayload } from "@payloadcms/next/withPayload";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const witthMdx = createMDX({});

export default withPayload(witthMdx(nextConfig));
