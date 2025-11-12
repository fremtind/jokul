import type { ComponentPropsWithRef } from "react";

export type CheckboxPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type"
> & {
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
