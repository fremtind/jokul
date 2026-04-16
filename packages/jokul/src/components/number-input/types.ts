import type { InputHTMLAttributes } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type NumberInputProps = Omit<
    InputGroupProps,
    "children" | "inline" | "render"
> &
    Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "type"> & {
    /**
     * Justerer teksten i inputfeltet.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * CSS-verdi for bredden til input-feltet.
     */
    width?: string;
    inputClassName?: string;
    /**
     * Viser knapper på hver side av feltet som bruker native stepping.
     * Respekterer `min`, `max` og `step`.
     * @default false
     */
    stepper?: boolean;
};
