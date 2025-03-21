"use client";

import { Button, Icon } from "@fremtind/jokul";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    menuId: string;
};

export const NavigationMenuButton = ({ menuId }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    return (
        <Button
            className={"global-menu-button"}
            aria-expanded={expanded}
            aria-controls={menuId}
            id={`${menuId}-button`}
            variant="ghost"
            icon={expanded ? <Icon>Close</Icon> : <Icon>Menu</Icon>}
            onClick={(e) => setExpanded(!expanded)}
        />
    );
};
