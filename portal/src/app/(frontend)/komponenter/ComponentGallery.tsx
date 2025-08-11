"use client";

import { Button } from "@fremtind/jokul/button";
import clsx from "clsx";
import { setCookie } from "cookies-next";
import { useState } from "react";
import styles from "./komponenter.module.scss";

type ComponentGalleryProps = {
    mode?: string;
    children?: React.ReactNode;
};

export const ComponentGallery = ({ children, mode }: ComponentGalleryProps) => {
    const [viewMode, setViewMode] = useState(mode || "grid");

    const toggleGalleryView = () => {
        const newViewMode = viewMode === "grid" ? "list" : "grid";
        setViewMode(newViewMode);
        setCookie("componentGalleryViewMode", newViewMode);
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
