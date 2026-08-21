import clsx from "clsx";
import React, { forwardRef } from "react";
import { SlotComponent } from "../../utilities/index.js";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { FlexComponent, FlexProps } from "./types.js";

export const Flex = forwardRef(function Flex<
    ElementType extends React.ElementType = "div",
>(props: FlexProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        asChild,
        alignItems,
        alignContent,
        as = "div",
        className,
        direction,
        gap,
        justifyContent,
        wrap,
        ...rest
    } = props;

    const wrapping =
        wrap === true
            ? "wrap"
            : wrap === false
              ? "nowrap"
              : wrap === "reverse"
                ? "wrap-reverse"
                : wrap;

    function getGapValue(gap: FlexProps["gap"]) {
        if (gap?.toString().includes(" ")) {
            const [rowGap, columnGap] = gap.toString().split(" ");
            return `var(--jkl-spacing-${rowGap}) var(--jkl-spacing-${columnGap})`;
        }
        if (gap) {
            return `var(--jkl-spacing-${gap})`;
        }
        return undefined;
    }

    const Tag = asChild ? SlotComponent : as;

    return (
        <Tag
            {...rest}
            style={
                {
                    "--wrap": wrapping,
                    "--gap": getGapValue(gap),
                    "--align-items": alignItems,
                    "--align-content": alignContent,
                    "--justify-content": justifyContent,
                    "--flex-direction": direction,
                } as React.CSSProperties
            }
            className={clsx("jkl-flex", className)}
            ref={ref}
        />
    );
}) as FlexComponent;
