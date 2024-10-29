import { PolymorphicPropsWithRef, PolymorphicRef } from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";
import { IconVariant } from "./types";

type IconComponentProps<
    ElementType extends Extract<React.ElementType, "span" | "div">,
> = PolymorphicPropsWithRef<
    ElementType,
    {
        "data-testid"?: string;
        /**
         * Størrelsesvarianten til ikonet. `"small"` er 16px med 20px bounding box, og `"medium"` er 20px med 24px bounding box.
         * `"inherit"` setter størrelsen til ikonet (ikke bounding box) lik skriftstørrelsen (1em).
         */
        variant?: IconVariant;
        /**
         * Angir om ikonet skal vises i fet versjon
         * @default false
         */
        bold?: boolean;
        filled?: boolean;
        className?: string;
        style?: React.CSSProperties;
    }
>;

export type IconComponent = (<
    ElementType extends Extract<React.ElementType, "span" | "div"> = "span",
>(
    props: IconComponentProps<ElementType>,
) => React.ReactElement | null) & { displayName?: string };

export const Icon: IconComponent = React.forwardRef(function Icon<
    ElementType extends Extract<React.ElementType, "span" | "div"> = "span",
>(props: IconComponentProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const { bold, children, className, filled, variant, ...iconProps } = props;

    return (
        <span
            aria-hidden
            ref={ref}
            className={cn("jkl-icon", className, {
                "jkl-icon--filled": filled,
                "jkl-icon--bold": bold,
                [`jkl-icon--${variant}`]: !!variant,
            })}
            {...iconProps}
        >
            {children}
        </span>
    );
}) as IconComponent;
