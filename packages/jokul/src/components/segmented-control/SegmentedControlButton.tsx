import { clsx } from "clsx";
import React from "react";
import { RadioButton } from "../radio-button/index.js";
import type { SegmentedControlButtonProps } from "./types.js";

export const SegmentedControlButton = (props: SegmentedControlButtonProps) => {
    const { separated = false, checked, defaultChecked, ...rest } = props;
    const isSelected =
        typeof checked !== "undefined" ? checked : defaultChecked;

    return (
        <RadioButton
            checked={checked}
            defaultChecked={defaultChecked}
            {...rest}
            className={clsx("jkl-segmented-control-item", props.className)}
            data-separated={separated}
            // Merker valget for Mixpanels `autocapture` så bytter i en
            // segmented control kan spores via `data-jkl-*` når Mixpanel er
            // initialisert. Uten samtykke/token er attributtene helt inerte.
            // Overstyrer RadioButtons standard komponentnavn siden dette
            // er en segmented control, ikke en frittstående radioknapp.
            data-jkl-tracked="SegmentedControlButton"
            data-jkl-selected={isSelected || undefined}
        />
    );
};
