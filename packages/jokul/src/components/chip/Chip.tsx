import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { CheckIcon } from "../icon/icons/CheckIcon.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";

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

export type ChipProps = ChipVariant & HTMLAttributes<HTMLButtonElement>;

export const Chip: FC<ChipProps> = ({
    className,
    variant,
    onClick,
    children,
    selected,
    size = "small",
    ...rest
}) => {
    return (
        <button
            className={clsx(
                "jkl-chip",
                {
                    "jkl-chip--input": variant === "input",
                    "jkl-chip--filter": variant === "filter",
                    "jkl-chip--small": size === "small",
                    "jkl-chip--large": size === "large",
                },
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
                    className="jkl-chip__icon lol"
                    variant="small"
                    data-testid="jkl-close-icon"
                />
            )}
        </button>
    );
};
