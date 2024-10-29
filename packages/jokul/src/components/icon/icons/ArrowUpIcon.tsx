import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ArrowUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5d8"}</Icon>
);
ArrowUpIcon.displayName = "ArrowUpIcon";
