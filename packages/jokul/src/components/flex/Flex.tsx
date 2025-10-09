import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { FlexComponent, FlexProps } from "./types.js";
import { SlotComponent } from "../../utilities/index.js";

export const Flex = forwardRef(function Flex<
    ElementType extends React.ElementType = "div",
>(props: FlexProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        asChild,
        alignItems,
        alignContent,
        as = "div",
        center = false,
        className,
        direction = "row",
        fill,
        gap = "m",
        inline,
        justifyContent,
        layout = {},
        textAlign,
        wrap = "wrap",
        ...rest
    } = props;

    const Tag = asChild ? SlotComponent : as;
    const gaps = toObj(gap).flatMap(([breakpoint, gap]) => {
        const [row, col = row] = gap.trim().split(" ");
        return [`${breakpoint}-row-gap-${row}`, `${breakpoint}-col-gap-${col}`];
    });
    const layouts = toObj(layout).map(
        ([breakpoint, layout]) =>
            `${breakpoint}-${Number(`${layout}`.replace("auto", "0"))}`, // Convert to number to convert 2.10 to 2.1 and false to 0
    );

    return (
        <Tag
            {...rest}
            className={clsx(
                "jkl-flex",
                !alignItems || `align-items-${alignItems}`,
                !alignContent || `align-content-${alignContent}`,
                !center || `center-${center === true ? "xxl" : center}`,
                !fill || "fill",
                !inline || "inline-flex",
                !justifyContent || `justify-content-${justifyContent}`,
                !textAlign || `text-align-${textAlign}`,
                !wrap || `flex-wrap-${wrap}`,
                !direction || `flex-direction-${direction}`,
                "flex",
                ...gaps,
                ...layouts,
                className,
            )}
            ref={ref}
        />
    );
}) as FlexComponent; // Needed to tell Typescript this does not return ReactNode but acutally JSX.Element

const toObj = (value: string | number | object) =>
    Object.entries(typeof value === "object" ? value : { xs: value });
