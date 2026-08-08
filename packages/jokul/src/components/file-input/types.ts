import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type UploadedFile = {
    file: File;
    state?: "loading" | "error";
    uploadProgress?: number;
    validation?: unknown;
};

export type FileInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "value" | "children"
> & {
    label?: InputGroupProps["label"];
    /**
     * Tekst på label til InputGroup.
     *
     * @default "Last opp dokumenter"
     */
    children: ReactNode;
    /**
     * Tekst på knappen.
     *
     * @default "Velg fil"
     */
    description?: InputGroupProps["description"];
    errorLabel?: InputGroupProps["errorLabel"];
    helpLabel?: InputGroupProps["helpLabel"];
};
