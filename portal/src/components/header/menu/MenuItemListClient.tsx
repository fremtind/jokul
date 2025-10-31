"use client";

import type { KomIGangQueryResult } from "@/sanity/types";
import { MenuItem } from "@fremtind/jokul/menu";
import { MenuItem as Link } from "./MenuItem";

type MenuItemListClientProps = {
    komIGang: KomIGangQueryResult;
};

export const MenuItemListClient = ({ komIGang }: MenuItemListClientProps) => {
    const menuId = "global-menu";

    return (
        <nav aria-label="Hovednavigasjon">
            <ul id={menuId}>
                <li>
                    <MenuItem as={Link} href="/komponenter">
                        Komponenter
                    </MenuItem>
                </li>

                <li>
                    <MenuItem as={Link} href="/design-tokens">
                        Design Tokens
                    </MenuItem>
                </li>

                <li>
                    <MenuItem as={Link} href="/blog">
                        Artikler
                    </MenuItem>
                </li>

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
            </ul>
        </nav>
    );
};
