import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/index.js";
import type { TextElement, TextProps } from "./types.js";

type TextComponent = <As extends TextElement = "p">(
    props: TextProps<As>,
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(function Text<
    As extends TextElement = "p",
>(
    { as, className, size = "m", bold, short, srOnly, ...rest }: TextProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Component = (as || "p") as React.ElementType;
    return (
        <Component
            className={clsx("jkl-text", srOnly && "jkl-sr-only", className)}
            data-text-size={size}
            data-bold={bold || undefined}
            data-short={short || undefined}
            ref={ref}
            {...rest}
        />
    );
}) as TextComponent;
