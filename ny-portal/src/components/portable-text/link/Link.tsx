import { Link as JokulLink } from "@fremtind/jokul/components/link";
import NextLink from "next/link";
import type { PortableTextMarkComponentProps } from "next-sanity";

type LinkProps = PortableTextMarkComponentProps<any>;

export const Link = ({ value }: LinkProps) => {
    return <JokulLink as={NextLink} href={value.href} />;
};
