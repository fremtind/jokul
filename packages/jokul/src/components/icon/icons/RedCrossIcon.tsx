import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const RedCrossIcon: IconComponent = (props: IconProps) => (
    <Icon {...props} style={{ color: "var(--jkl-color-border-error)" }} filled>
        {"\ue5c9"}
    </Icon>
);
RedCrossIcon.displayName = "RedCrossIcon";
