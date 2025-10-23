import type { ComponentPropsWithRef } from "react";
import type { FieldGroupProps } from "../input-group/types.js";

// aria-invalid has been deprecated for the "radio" role, it should go on the
// parent radiogroup
export type RadioPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type" | "aria-invalid"
> & {
    value: string;
    label: string;
    /**
     * @deprecated bruk heller {@link amount} for å vise pris.
     * Dersom du har behov utover dette ta kontakt med oss så finner vi en løsning sammen.
     */
    extraLabel?: React.ReactNode;
    /**
     * @deprecated vi ønsker ikke at content skal skjules for brukerne lenger
     * @default false
     */
    alwaysOpen?: boolean;
    /**
     * Viser pris til høyre i panelet
     */
    amount?: string;
};

export type RadioPanelGroupProps = FieldGroupProps & {};
