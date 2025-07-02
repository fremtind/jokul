import React from "react";
import type { Density } from "../../core/index.js";
import type { FileProps } from "../file/types.js";
import type { FieldGroupProps } from "../input-group/index.js";

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
    className?: string;
    id?: string;
    density?: Density;
    /**
     * En string som begrenser hvilke filtyper som kan velges.
     *
     * Flere filtyper kan defineres som en kommaseparert liste.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    /**
     * @default true
     */
    multiple?: boolean;
    value: UploadedFile[];
    variant?: "flexible" | "small";
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.DragEvent<HTMLDivElement>,
        files: UploadedFile[],
    ) => void;
}
