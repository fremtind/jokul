import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const WarningIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf083"}
    </Icon>
);
WarningIcon.displayName = "WarningIcon";
