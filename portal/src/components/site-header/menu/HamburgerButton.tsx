"use client";

import { Button } from "@fremtind/jokul/components/button";
import { Icon } from "@fremtind/jokul/components/icon";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../SiteHeader.module.scss";

type Props = {
    menuId: string;
};

export const HamburgerButton = ({ menuId }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    // biome-ignore lint/correctness/useExhaustiveDependencies: Vi trigger på pathname
    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    return (
        <Button
            className={styles.menuButton}
            aria-expanded={expanded}
            aria-controls={menuId}
            id={`${menuId}-button`}
            variant="ghost"
            icon={expanded ? <Icon>Close</Icon> : <Icon>Menu</Icon>}
            onClick={(e) => setExpanded(!expanded)}
        />
    );
};
