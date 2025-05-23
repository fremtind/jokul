import type { ComponentPropsWithRef } from "react";

export type CheckboxPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type"
> & {
    label: string;
    extraLabel?: React.ReactNode;
    alwaysOpen?: boolean;
};
