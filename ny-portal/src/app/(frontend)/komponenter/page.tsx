import { Flex } from "@fremtind/jokul/components/flex";
import { Link } from "@fremtind/jokul/components/link";
import { client } from "@/sanity/client";
import { componentsQuery } from "@/sanity/queries/componentPage";
import NextLink from "next/link";

export default async function Components() {
    const components = await client.fetch(componentsQuery);

    return (
        <Flex as="ul" direction="column" gap={16}>
            {components.map((component) => (
                <li key={component.slug?.current}>
                    <Link
                        as={NextLink}
                        href={`/komponenter/${component.slug?.current}`}
                    >
                        {component.title}
                    </Link>
                </li>
            ))}
        </Flex>
    );
}
