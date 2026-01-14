import type { ButtonHTMLAttributes } from "react";

export type ChipVariant =
    | {
          variant: "input";
          selected?: never;
      }
    | {
          variant: "filter";
          selected?: boolean;
      };

export type ChipProps = ChipVariant & ButtonHTMLAttributes<HTMLButtonElement>;
