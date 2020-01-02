import React from "react";
import { Link } from "gatsby";

interface Props {
    link: {
        title: string;
        section?: string;
        page: string;
    };
}

export function MenuLink({ link }: Props) {
    const toLink = link.section ? `/${link.section}/${link.page}` : `/${link.page}`;
    return (
        <Link className="portal-menu__link" to={toLink}>
            {link.title}
        </Link>
    );
}
