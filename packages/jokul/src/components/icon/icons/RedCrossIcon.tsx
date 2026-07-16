import clsx from "clsx";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const RedCrossIcon: IconComponent = ({
    className,
    ...props
}: IconProps) => (
    <Icon {...props} filled className={clsx("jkl-icon-red-cross", className)}>
        {"\ue5c9"}
    </Icon>
);
RedCrossIcon.displayName = "RedCrossIcon";
