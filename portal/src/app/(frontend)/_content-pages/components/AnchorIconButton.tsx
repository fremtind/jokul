"use client";

import { Button } from "@fremtind/jokul/button";
import { CopyIcon } from "@fremtind/jokul/icon";
import styles from "../content-page.module.scss";

interface AnchorIconButtonProps {
    href: string;
}

export const AnchorIconButton = ({ href }: AnchorIconButtonProps) => (
    <Button
        as="a"
        href={href}
        variant="ghost"
        icon={<CopyIcon />}
        aria-label="Lenke til release"
        title="Lenke til release"
        className={styles.releaseLink}
    />
);
