import clsx from "clsx";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const GreenCheckIcon: IconComponent = (props: IconProps) => (
    <Icon {...props} className={clsx("jkl-icon-green-check", props.className)}>
        {"\ue5ca"}
    </Icon>
);
GreenCheckIcon.displayName = "GreenCheckIcon";
