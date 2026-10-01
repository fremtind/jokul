import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/index.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { TextElement, TextProps } from "./types.js";

type TextComponent = <As extends TextElement = "p">(
    props: TextProps<As>,
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(function Text<
    As extends TextElement = "p",
>(
    {
        as,
        className,
        size = "m",
        bold,
        short,
        srOnly,
        center,
        subdued,
        tracking,
        ...rest
    }: TextProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Component = (as || "p") as React.ElementType;
    const trackingLabel =
        typeof rest.children === "string" ? rest.children : undefined;
    return (
        <Component
            className={clsx("jkl-text", srOnly && "jkl-sr-only", className)}
            data-text-size={size}
            data-bold={bold || undefined}
            data-short={short || undefined}
            data-center={center || undefined}
            data-subdued={subdued || undefined}
            ref={ref}
            {...rest}
            data-track-component-name={COMPONENT_NAMES.Typography}
            data-track-id={tracking?.id ?? trackingLabel}
            data-track-label={trackingLabel}
            data-track-size={size}
            data-track-bold={bold}
            data-track-subdued={subdued}
            {...getExtraTrackingAttributes(tracking?.extra)}
        />
    );
}) as TextComponent;
