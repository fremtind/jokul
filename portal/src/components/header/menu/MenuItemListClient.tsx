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
            <ul id={menuId} className="jkl-list">
                {komIGang?.slug && (
                    <li className="jkl-list__item" key={komIGang.slug.current}>
                        <MenuItem
                            as={Link}
                            href={`/blog/${komIGang.slug.current}`}
                        >
                            Kom i gang
                        </MenuItem>
                    </li>
                )}

                <li className="jkl-list__item">
                    <MenuItem as={Link} href="/blog">
                        Artikler
                    </MenuItem>
                </li>

                <li className="jkl-list__item">
                    <MenuItem as={Link} href="/komponenter">
                        Komponenter
                    </MenuItem>
                </li>
            </ul>
        </nav>
    );
};
