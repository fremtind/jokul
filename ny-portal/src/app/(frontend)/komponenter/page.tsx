import { Flex, Link } from "@fremtind/jokul/components";
import NextLink from "next/link";
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
        <Flex as="ul" direction="column" gap={16}>
            {data.docs.map((page) => (
                <li key={page.title}>
                    <Link
                        as={NextLink}
                        key={page.slug}
                        href={`/komponenter/${page.slug}`}
                    >
                        {page.title}
                    </Link>
                </li>
            ))}
        </Flex>
    );
}
