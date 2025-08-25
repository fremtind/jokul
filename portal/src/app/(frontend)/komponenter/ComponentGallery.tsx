"use client";

import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
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
            <SegmentedControl
                legend="Velg visning"
                labelProps={{ srOnly: true }}
                style={{
                    marginBottom: "var(--jkl-unit-40)",
                    alignSelf: "flex-end",
                }}
            >
                <SegmentedControlButton
                    onChange={toggleGalleryView}
                    value="grid"
                    defaultChecked={viewMode === "grid"}
                    name="visning"
                >
                    Galleri
                </SegmentedControlButton>
                <SegmentedControlButton
                    onChange={toggleGalleryView}
                    value="list"
                    defaultChecked={viewMode === "list"}
                    name="visning"
                >
                    Liste
                </SegmentedControlButton>
            </SegmentedControl>
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
