import clsx from "clsx";
import React from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";
import type { IconVariant } from "./types.js";

type IconComponentProps<
    ElementType extends "span" | "div",
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
    ElementType extends "span" | "div" = "span",
>(
    props: IconComponentProps<ElementType>,
) => React.ReactElement | null) & { displayName?: string };

export const Icon: IconComponent = React.forwardRef(function Icon<
    ElementType extends "span" | "div" = "span",
>(props: IconComponentProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "span",
        bold,
        children,
        className,
        filled,
        variant,
        ...iconProps
    } = props;
    const iconClassName = clsx("jkl-icon", className, {
        "jkl-icon--filled": filled,
        "jkl-icon--bold": bold,
    });

    if (as === "div") {
        return (
            <div
                aria-hidden
                ref={ref as PolymorphicRef<"div">}
                className={iconClassName}
                {...(iconProps as React.HTMLAttributes<HTMLDivElement>)}
            >
                {children}
            </div>
        );
    }

    return (
        <span
            aria-hidden
            ref={ref as PolymorphicRef<"span">}
            className={iconClassName}
            {...(iconProps as React.HTMLAttributes<HTMLSpanElement>)}
        >
            {children}
        </span>
    );
}) as IconComponent;
