import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const CopyIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue14d"}</Icon>
);
CopyIcon.displayName = "CopyIcon";
