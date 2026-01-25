import type { MouseEvent } from "react";

export type FileProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    errorLabel?: string;
    state?: "error" | "loading";
    /**
     * Velg hvordan filene skal vises for brukeren
     *
     * @default "list"
     */
    variant?: "list" | "card";
    file?: File;
    /**
     * Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting
     */
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
};
