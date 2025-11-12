"use client";

import { Popover } from "@fremtind/jokul/popover";
import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
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
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                asChild
            >
                <HamburgerButton expanded={open} />
            </Popover.Trigger>
            <Popover.Content
                padding={16}
                className={styles.menu}
                onClick={() => setOpen(!open)}
            >
                {children}
            </Popover.Content>
        </Popover>
    );
};
