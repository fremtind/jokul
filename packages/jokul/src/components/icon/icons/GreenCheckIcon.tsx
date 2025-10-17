import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const GreenCheckIcon: IconComponent = (props: IconProps) => (
    <Icon
        {...props}
        filled
        style={{ color: "var(--jkl-color-border-success)" }}
    >
        {"\ue86c"}
    </Icon>
);
GreenCheckIcon.displayName = "GreenCheckIcon";
