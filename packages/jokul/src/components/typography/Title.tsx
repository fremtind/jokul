import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/index.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { TitleElement, TitleProps } from "./types.js";

type TitleComponent = <As extends TitleElement = "h2">(
    props: TitleProps<As>,
) => React.ReactElement | null;

export const Title: TitleComponent = forwardRef(function Title<
    As extends TitleElement = "h2",
>(
    {
        className,
        size = "l",
        as,
        srOnly,
        center,
        tracking,
        ...rest
    }: TitleProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Tag = (as || "h2") as React.ElementType;
    const trackingLabel =
        typeof rest.children === "string" ? rest.children : undefined;
    return (
        <Tag
            className={clsx(srOnly && "jkl-sr-only", className)}
            data-text-size={size}
            data-center={center || undefined}
            ref={ref}
            {...rest}
            data-track-component-name={COMPONENT_NAMES.Typography}
            data-track-id={tracking?.id ?? trackingLabel}
            data-track-label={trackingLabel}
            data-track-size={size}
            {...getExtraTrackingAttributes(tracking?.extra)}
        />
    );
}) as TitleComponent;
