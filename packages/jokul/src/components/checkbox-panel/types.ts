import type { ComponentPropsWithRef } from "react";

export type CheckboxPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type"
> & {
    label: string;
    extraLabel?: React.ReactNode;
    /**
     * @deprecated vi ønsker ikke at content skal skjules for brukerne lenger
     * @default true
     */
    alwaysOpen?: boolean;
};
