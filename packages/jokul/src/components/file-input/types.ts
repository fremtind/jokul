import type { InputHTMLAttributes } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type FileInputGroupProps = Omit<InputGroupProps, "children" | "render">;

export interface FileInputProps
    extends FileInputGroupProps,
        Omit<
            InputHTMLAttributes<HTMLInputElement>,
            keyof FileInputGroupProps | "children" | "type" | "value"
        > {
    /**
     * Bestemmer om komponenten skal vises som knapp eller dropzone.
     *
     * @default "button"
     */
    variant?: "button" | "dropzone";
    /**
     * Tekst på knappen.
     *
     * @default "Velg fil"
     */
    buttonText?: string;
}
