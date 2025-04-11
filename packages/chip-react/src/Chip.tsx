import { CheckIcon, CloseIcon } from "@fremtind/jkl-icons-react";
import cl from "classnames";
import React, { forwardRef, ButtonHTMLAttributes } from "react";

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

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
    {
        className,
        variant,
        onClick,
        children,
        selected,
        size = "small",
        ...rest
    },
    ref,
) {
    return (
        <button
            type="button"
            ref={ref}
            className={cl(
                "jkl-chip",
                `jkl-chip--${size}`,
                `jkl-chip--${variant}`,
                className,
            )}
            onClick={onClick}
            aria-pressed={selected}
            {...rest}
        >
            {children}
            {variant === "filter" && selected && (
                <CheckIcon
                    className="jkl-chip__icon"
                    variant="small"
                    data-testid="jkl-check-icon"
                />
            )}
            {variant === "input" && (
                <CloseIcon
                    className="jkl-chip__icon"
                    variant="small"
                    data-testid="jkl-close-icon"
                />
            )}
        </button>
    );
});
