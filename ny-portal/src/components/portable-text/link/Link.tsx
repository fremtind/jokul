import { Link as JokulLink } from "@fremtind/jokul/components";
import NextLink from "next/link";
import { PortableTextMarkComponentProps } from "next-sanity";

type LinkProps = PortableTextMarkComponentProps<any>;

export const Link = ({ value }: LinkProps) => {
    return <JokulLink as={NextLink} href={value.href} />;
};
