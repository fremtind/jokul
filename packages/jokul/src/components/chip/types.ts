import type { ButtonHTMLAttributes } from "react";

type Size = "small" | "large";

export type ChipVariant =
    | {
          variant: "input";
          selected?: never;
          size?: Size;
      }
    | {
          variant: "filter";
          selected?: boolean;
          size?: Size;
      };

export type ChipProps = ChipVariant & ButtonHTMLAttributes<HTMLButtonElement>;
