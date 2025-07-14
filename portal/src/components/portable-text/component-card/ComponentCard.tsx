import { ComponentCard as ComponentLink } from "@/app/(frontend)/komponenter/ComponentCard";
import { Flex } from "@fremtind/jokul/flex";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

type ComponentCardResolved = {
    _type: "jokul_componentCard";
    components: {
        name: string;
        slug: string;
        _key?: string;
    }[];
};

export const ComponentCard: FC<
    PortableTextTypeComponentProps<ComponentCardResolved>
> = ({ value }) => {
    const card = value as ComponentCardResolved;

    if (!card?.components?.length) return null;

    return (
        <Flex gap={12}>
            {card.components.map((component, index) => (
                <ComponentLink
                    key={index}
                    componentSlug={`/komponenter/${component.slug}`}
                />
            ))}
        </Flex>
    );
};
