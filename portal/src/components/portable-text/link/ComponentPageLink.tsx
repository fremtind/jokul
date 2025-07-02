import type { Slug } from "@/sanity/types";
import { Link } from "@fremtind/jokul/link";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";

type LinkProps = PortableTextMarkComponentProps<{
    _type: "componentPageLink";
    component: {
        name: string;
        slug: Slug;
    };
}>;

export const ComponentPageLink = ({ value, children }: LinkProps) => {
    if (!value) return null;

    return (
        <Link as={NextLink} href={value.component.slug.current || "#"}>
            {children}
        </Link>
    );
};
