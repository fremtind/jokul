import type { MouseEvent, ReactNode } from "react";
import type { Tracking } from "../types.js";

export type FileProps = {
    /** Filnavnet som vises */
    fileName: string;
    /** MIME-typen til filen, f.eks. `image/png`. Bilder får forhåndsvisning. */
    fileType: string;
    /** Filstørrelsen i bytes */
    fileSize: number;
    /** URL til filen. Filnavnet blir en lenke, og bilder vises som forhåndsvisning. */
    path?: string;
    /**
     * Feilmelding som vises under filen når `state` er `"error"`
     *
     * @default "Feil"
     */
    errorLabel?: string;
    /**
     * Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass
     * @default false
     */
    hideThumbnail?: boolean;
    /** `loading` viser at filen lastes opp, `error` viser `errorLabel` under filen */
    state?: "error" | "loading";
    /**
     * Fremdrift for opplastingen i prosent (0–100). Vises som en tynn linje i underkanten av
     * filen når `state` er `"loading"`. Uten verdi glir linjen frem og tilbake.
     */
    uploadProgress?: number;
    /**
     * Velg hvordan filene skal vises for brukeren
     *
     * @default "list"
     */
    variant?: "list" | "card";
    /** Filen brukeren har valgt. Brukes til forhåndsvisning av bilder som ikke har `path`. */
    file?: File;
    /**
     * Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting
     */
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
    /**
     * @deprecated Blir ikke brukt, vil fjernes i neste major-release
     */
    children?: ReactNode;
    /** Ekstra informasjon som legges på filen som `data-track-*`-attributter */
    trackingProps?: Tracking;
};
