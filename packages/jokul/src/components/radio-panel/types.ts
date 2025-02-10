import { ComponentPropsWithRef } from "react";
import { FieldGroupProps } from "../input-group/types.js";

// aria-invalid has been deprecated for the "radio" role, it should go on the
// parent radiogroup
export type RadioPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type" | "aria-invalid"
> & {
    value: string;
    label: string;
    extraLabel?: React.ReactNode;
    alwaysOpen?: boolean;
};

export type RadioPanelGroupProps = FieldGroupProps & {};
