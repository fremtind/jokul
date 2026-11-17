"use client";

import { Link } from "@fremtind/jokul/link";

type FooterLinkProps = {
    href: string;
    text: string;
};

export const FooterLink = ({ href, text }: FooterLinkProps) => {
    if (!text) {
        return null;
    }

    return <Link href={href}>{text}</Link>;
};
