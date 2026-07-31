"use client";

import { navigationLinks } from "@/components/layout/header/navigation/menu/data";
import { HamburgerMenuItem } from "@/components/layout/header/navigation/menu/hamburger/HamburgerMenuItem";
import { Popover } from "@fremtind/jokul/popover";
import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
import styles from "./hamburger.module.scss";

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
            roleOptions={{
                role: "menu",
            }}
        >
            <Popover.Trigger
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                asChild
            >
                <HamburgerButton expanded={open} />
            </Popover.Trigger>
            <Popover.Content
                padding={16}
                className={styles.hamburger}
                onClick={() => setOpen(!open)}
            >
                {navigationLinks.map(({ href, label }) => (
                    <HamburgerMenuItem key={href} href={href}>
                        {label}
                    </HamburgerMenuItem>
                ))}
            </Popover.Content>
        </Popover>
    );
};
