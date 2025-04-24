"use client";

import { Button } from "@fremtind/jokul";
import styles from "./komponenter.module.scss";

type ComponentGalleryProps = {
    children?: React.ReactNode;
};

export const ComponentGallery = ({ children }: ComponentGalleryProps) => {
    const toggleGalleryView = () => {
        const gallery = document?.querySelector(`.${styles.componentGallery}`);
        if (gallery) {
            gallery.classList.toggle(styles.listView);
        }
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
            <ul aria-label="Komponenter" className={styles.componentGallery}>
                {children}
            </ul>
        </>
    );
};
