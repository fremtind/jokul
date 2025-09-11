"use client";

import type { KomIGangQueryResult } from "@/sanity/types";
import { MenuItem as Link } from "./MenuItem";
import { MenuItem } from "@fremtind/jokul/menu";

type MenuItemListClientProps = {
    komIGang: KomIGangQueryResult;
};

export const MenuItemListClient = ({ komIGang }: MenuItemListClientProps) => {
    const menuId = "global-menu";

    return (
        <nav aria-label="Hovednavigasjon">
            <ul id={menuId}>
                {komIGang?.slug && (
                    <li key={komIGang.slug.current}>
                        <MenuItem
                            as={Link}
                            href={`/blog/${komIGang.slug.current}`}
                        >
                            Kom i gang
                        </MenuItem>
                    </li>
                )}

                <li>
                    <MenuItem as={Link} href="/blog">
                        Artikler
                    </MenuItem>
                </li>

                <li>
                    <MenuItem as={Link} href="/komponenter">
                        Komponenter
                    </MenuItem>
                </li>
            </ul>
        </nav>
    );
};
