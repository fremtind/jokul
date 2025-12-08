import { clsx } from "clsx";
import { FieldGroup } from "../input-group/FieldGroup.js";
import type { SegmentedControlProps } from "./types.js";

export const SegmentedControl = (props: SegmentedControlProps) => {
    return (
        <FieldGroup
            {...props}
            className={clsx("jkl-segmented-control", props.className)}
        />
    );
};

SegmentedControl.displayName = "Segmented Control";
