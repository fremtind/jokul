import type { ButtonHTMLAttributes } from "react";
import type { WithTracking } from "../cookie-consent/types.js";

export type ChipVariant =
    | {
          variant: "input";
          selected?: never;
      }
    | {
          variant: "filter";
          selected?: boolean;
      };

export type ChipProps = ChipVariant &
    ButtonHTMLAttributes<HTMLButtonElement> &
    WithTracking;
