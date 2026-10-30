import type { ButtonHTMLAttributes } from "react";
import type { Tracking } from "../types.js";

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
    ButtonHTMLAttributes<HTMLButtonElement> & {
        tracking?: Tracking;
    };
