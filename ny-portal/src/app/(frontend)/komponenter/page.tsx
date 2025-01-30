import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function Components() {
    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
        collection: "component-page",
        select: {
            title: true,
            slug: true,
        },
    });

    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.docs.map((page) => (
                <Link
                    style={{ color: "var(--jkl-color-text-default)" }}
                    key={page.slug}
                    href={`/komponenter/${page.slug}`}
                >
                    {page.title}
                </Link>
            ))}
        </ul>
    );
}
