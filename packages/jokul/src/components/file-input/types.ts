import React from "react";
import type { FileProps } from "../file/types.js";
import type { FieldGroupProps } from "../input-group/index.js";
import type { Tracking } from "../types.js";

export interface UploadedFileValidation {
    type: "TOO_LARGE" | "WRONG_TYPE";
    message: string;
}

export interface UploadedFile {
    file: File;
    validation?: UploadedFileValidation;
    state: FileProps["state"];
    uploadProgress: number;
}

export interface FileInputProps extends Omit<FieldGroupProps, "onChange"> {
    /** Id-en settes på filvelgeren (`<input type="file">`), ikke på fieldset */
    id?: string;
    /**
     * En string som begrenser hvilke filtyper som kan velges.
     *
     * Flere filtyper kan defineres som en kommaseparert liste.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    /**
     * Største tillatte filstørrelse i bytes. Vises i beskrivelsen av feltet, og filer som er
     * større får `validation.type` `"TOO_LARGE"`.
     */
    maxSizeBytes?: number;
    /**
     * La brukeren velge flere filer. Når den er `false`, beholdes bare den første filen.
     *
     * @default true
     */
    multiple?: boolean;
    /**
     * Filene som er valgt. Komponenten er kontrollert, så du må selv legge til nye filer fra
     * `onChange` og fjerne filer med `onRemove` på `File`.
     */
    value: UploadedFile[];
    /**
     * Velg hvordan de opplastede filene skal vises. `card` viser filene som et
     * rutenett, side om side. Kan overstyres per fil ved å sette `variant` på
     * hver enkelt `File`.
     *
     * @default "list"
     */
    fileVariant?: FileProps["variant"];
    /**
     * Kalles når brukeren velger eller slipper filer. `files` inneholder bare de nye filene,
     * validert mot `accept` og `maxSizeBytes`.
     */
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        files: UploadedFile[],
    ) => void;
    /** Ekstra informasjon som legges på filvelgeren som `data-track-*`-attributter */
    trackingProps?: Tracking;
}
