import { Link as JokulLink } from "@fremtind/jokul/link";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";

type LinkProps = PortableTextMarkComponentProps<{
    _type: "link";
    href: string;
}>;

export const Link = ({ value, children }: LinkProps) => {
    return value?.href ? (
        <JokulLink as={NextLink} href={value.href}>
            {children}
        </JokulLink>
    ) : (
        children
    );
};
