import type { MouseEvent, ReactNode } from "react";

export type FileProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    errorLabel?: string;
    /**
     * Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass
     * @default false
     */
    hideThumbnail?: boolean;
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
    /**
     * @deprecated Blir ikke brukt, vil fjernes i neste major-release
     */
    children?: ReactNode;
};
