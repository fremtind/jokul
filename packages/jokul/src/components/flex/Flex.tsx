import clsx from "clsx";
import type React from "react";
import { forwardRef } from "react";
import { SlotComponent } from "../../utilities/index.js";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import {
    type Breakpoint,
    type FlexComponent,
    type FlexProps,
    type Responsive,
    isResponsive,
} from "./types.js";

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
        wrap = "nowrap",
        ...rest
    } = props;

    const Tag = asChild ? SlotComponent : as;
    const gaps = toObjectEntries(gap).flatMap(([breakpoint, gap]) => {
        const [row, col = row] = gap.trim().split(" ");
        return [
            `screen-${breakpoint}-row-gap-${row}`,
            `screen-${breakpoint}-col-gap-${col}`,
        ];
    });
    const layouts = toObjectEntries(layout).map(
        ([breakpoint, layout]) => `screen-${breakpoint}-${layout}`, // Convert to number to convert 2.10 to 2.1 and false to 0
    );

    return (
        <Tag
            {...rest}
            className={clsx(
                "jkl-flex",
                !alignItems || `align-items-${alignItems}`,
                !alignContent || `align-content-${alignContent}`,
                !center || `center-${center === true ? "2xl" : center}`,
                !fill || "fill",
                !inline || "inline-flex",
                !justifyContent || `justify-content-${justifyContent}`,
                !textAlign || `text-align-${textAlign}`,
                !wrap || `flex-wrap-${wrap}`,
                !direction || `flex-direction-${direction}`,
                ...gaps,
                ...layouts,
                className,
            )}
            ref={ref}
        />
    );
}) as FlexComponent; // Needed to tell Typescript this does not return ReactNode but acutally JSX.Element

/**
 * Gjør en enkeltstående eller responsiv verdi om til et nøstet array,
 * der hvert indre array inneholder et breakpoint med tilhørende verdi.
 * @example `{ small: "12", large: "64" }` -> `[["small", "12"], ["large", "64"]]`
 * @example `"24"` -> `[["small", "24"]]`
 * @param value enkeltstående eller responsiv verdi
 * @returns nøstet array med breakpoints og verdier
 */
function toObjectEntries<T>(value: T | Responsive<T>): [Breakpoint, T][] {
    if (isResponsive(value)) {
        return Object.entries(value) as [Breakpoint, T][];
    }

    return [["small", value]];
}
