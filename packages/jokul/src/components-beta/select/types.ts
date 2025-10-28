import type { ReactNode, SelectHTMLAttributes } from "react";
import type { InputGroupProps } from "../../components/input-group/types.js";

export interface SelectProps
    extends Omit<InputGroupProps, "children" | "inline">,
        SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Setter inn et placeholderelement som vises når ingenting er valgt i nedtrekkslisten.
     * @default "Velg"
     */
    placeholder?: string;
    children: ReactNode | ReactNode[];
}
