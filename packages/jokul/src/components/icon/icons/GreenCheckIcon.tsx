import clsx from "clsx";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const GreenCheckIcon: IconComponent = ({
    className,
    ...props
}: IconProps) => (
    <Icon {...props} filled className={clsx("jkl-icon-green-check", className)}>
        {"\uf0be"}
    </Icon>
);
GreenCheckIcon.displayName = "GreenCheckIcon";
