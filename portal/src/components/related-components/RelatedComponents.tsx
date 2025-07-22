import { ComponentCard } from "@/app/(frontend)/komponenter/ComponentCard";

type RelatedComponentsProps = {
    component: {
        slug?: string;
        name?: string;
    };
};

export const RelatedComponents = async ({
    component,
}: RelatedComponentsProps) => {
    if (!component.slug) return null;

    return <>{await (<ComponentCard componentSlug={component.slug} />)}</>;
};
