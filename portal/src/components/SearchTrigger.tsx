import { SearchIcon } from "@fremtind/jokul/components/icon";
import cn from "clsx";
import type { MouseEventHandler } from "react";
import { KeyboardShortcut } from "./KeyboardShortcut";
import styles from "./search-trigger.module.scss";

interface SearchTriggerProps {
    variant?: "icon" | "full";
    onClick: MouseEventHandler;
    tabIndex?: number;
}

export function SearchTrigger({
    onClick,
    variant = "full",
    ...rest
}: SearchTriggerProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(styles.searchTrigger, {
                [styles["searchTrigger--icon"]]: variant === "icon",
            })}
            {...rest}
        >
            <div className={styles.searchTrigger__labelWrapper}>
                <SearchIcon variant="medium" />
                <span className={styles.searchTrigger__label}>Søk</span>
            </div>
            <KeyboardShortcut className={styles.searchTrigger__shortcut}>
                ⌘K
            </KeyboardShortcut>
        </button>
    );
}
