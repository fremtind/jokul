"use client";

import { Popover } from "@fremtind/jokul/popover";
import { HamburgerButton } from "./HamburgerButton";
import { useState } from "react";
import styles from "./menu.module.scss";

type MenuProps = {
    children: React.ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
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
                onClick={() => setOpen?.(!open)}
                aria-expanded={open}
                asChild
            >
                <HamburgerButton expanded={open} />
            </Popover.Trigger>
            <Popover.Content padding={16} className={styles.menu}>
                {children}
            </Popover.Content>
        </Popover>
    );
};
