"use client";

import { Button } from "@fremtind/jokul/components/button";
import { useLocalStorage } from "@fremtind/jokul/hooks";
import clsx from "clsx";
import styles from "./komponenter.module.scss";

type ComponentGalleryProps = {
    children?: React.ReactNode;
};

export const ComponentGallery = ({ children }: ComponentGalleryProps) => {
    const [viewMode, setViewMode] = useLocalStorage(
        "componentGalleryViewMode",
        "grid",
    );

    const toggleGalleryView = () => {
        setViewMode(viewMode === "grid" ? "list" : "grid");
    };

    return (
        <>
            <Button
                onClick={toggleGalleryView}
                style={{
                    marginBottom: "var(--jkl-unit-40)",
                    alignSelf: "flex-end",
                }}
                variant="tertiary"
            >
                Liste / Galleri
            </Button>
            <ul
                aria-label="Komponenter"
                className={clsx(styles.componentGallery, {
                    [styles.listView]: viewMode === "list",
                })}
            >
                {children}
            </ul>
        </>
    );
};
