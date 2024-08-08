import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const SuccessIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf0be"}
    </Icon>
);
SuccessIcon.displayName = "SuccessIcon";
