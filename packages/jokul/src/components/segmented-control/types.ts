import type { ReactElement } from "react";
import type { FieldGroupProps } from "../input-group/types.js";
import type { RadioButtonProps } from "../radio-button/types.js";

export type SegmentedControlProps = FieldGroupProps;

export type SegmentedControlButtonProps = RadioButtonProps & {
    /**
     * Separerer valget fra gruppa dersom valget er litt ulikt de andre.
     * */
    separated?: boolean;
    /*
     * Icon erstatter radio-knappen med ikon som fyller seg ved valg. Vær OBS
     * på at ikke alle ikoner har fylte varianter, velg med omhu.
     */
    icon?: ReactElement;
};
