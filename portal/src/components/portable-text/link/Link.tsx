import { Link as JokulLink } from "@fremtind/jokul/link";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";

type LinkProps = PortableTextMarkComponentProps<{
    _type: "link";
    href: string;
    blank?: boolean;
}>;

export const Link = ({ value, children }: LinkProps) => {
    if (!value) return null;

    const { blank, href } = value;

    return href ? (
        <JokulLink
            as={NextLink}
            href={href}
            target={blank ? "_blank" : undefined}
            rel={blank ? "noopener" : undefined}
        >
            {children}
        </JokulLink>
    ) : (
        children
    );
};
