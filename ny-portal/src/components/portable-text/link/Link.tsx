import { Link as JokulLink } from "@fremtind/jokul/components/link";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";

type LinkProps = PortableTextMarkComponentProps<any>;

export const Link = ({ value }: LinkProps) => {
    return <JokulLink as={NextLink} href={value.href} />;
};
