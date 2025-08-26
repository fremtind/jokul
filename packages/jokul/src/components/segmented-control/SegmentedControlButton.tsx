import { clsx } from "clsx";
import React from "react";
import { RadioButton } from "../radio-button/index.js";
import type { SegmentedControlButtonProps } from "./types.js";

export const SegmentedControlButton = (props: SegmentedControlButtonProps) => {
    const { separated = false, icon, ...rest } = props;

    return (
        <RadioButton
            {...rest}
            className={clsx("jkl-segmented-control-item", props.className)}
            data-separated={separated}
            data-icon={!!icon}
        >
            {icon}
            {props.children}
        </RadioButton>
    );
};
