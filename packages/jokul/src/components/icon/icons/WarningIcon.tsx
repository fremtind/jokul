import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const WarningIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf083"}
    </Icon>
);
WarningIcon.displayName = "WarningIcon";
