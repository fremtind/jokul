import type { WithTracking } from "../cookie-consent/types.js";
import type { FieldGroupProps } from "../input-group/types.js";
import type { RadioButtonProps } from "../radio-button/types.js";

export type SegmentedControlProps = FieldGroupProps;

export type SegmentedControlButtonProps = RadioButtonProps &
    WithTracking & {
        /**
         * Separerer valget fra gruppa dersom valget er litt ulikt de andre.
         * */
        separated?: boolean;
    };
