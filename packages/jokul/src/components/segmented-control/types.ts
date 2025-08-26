import type { FieldGroupProps } from "../input-group/types.js";
import type { RadioButtonProps } from "../radio-button/types.js";

export type SegmentedControlProps = FieldGroupProps;

export type SegmentedControlButtonProps = RadioButtonProps & {
    /**
     * Separerer valget fra gruppa dersom valget er litt ulikt de andre.
     * */
    separated?: boolean;
};
