import type { InputHTMLAttributes } from "react";
import type { WithDisabled, WithReadOnly } from "../../utilities/types.js";
import type { InputGroupProps } from "../input-group/types.js";

export type NumberInputProps = Omit<
    InputGroupProps,
    "children" | "inline" | "render"
> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "children" | "type" | "disabled" | "readOnly"
    > &
    WithDisabled &
    WithReadOnly & {
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
