import clsx from "clsx";
import React from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { IconProps } from "./types.js";

type IconComponentProps<ElementType extends "span" | "div"> =
    PolymorphicPropsWithRef<ElementType, IconProps>;

export type IconComponent = (<ElementType extends "span" | "div" = "span">(
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
        tracking,
        ...iconProps
    } = props;
    const iconClassName = clsx("jkl-icon", className, {
        "jkl-icon--filled": filled,
        "jkl-icon--bold": bold,
    });
    const trackingProps = {
        "data-track-component-name": COMPONENT_NAMES.Icon,
        "data-track-id": tracking?.id,
        "data-track-variant": variant,
        ...getExtraTrackingAttributes(tracking?.extra),
    };

    if (as === "div") {
        return (
            <div
                aria-hidden
                ref={ref as PolymorphicRef<"div">}
                className={iconClassName}
                {...(iconProps as React.HTMLAttributes<HTMLDivElement>)}
                {...trackingProps}
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
            {...trackingProps}
        >
            {children}
        </span>
    );
}) as IconComponent;
