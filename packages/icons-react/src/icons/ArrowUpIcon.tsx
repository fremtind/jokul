import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ArrowUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5d8"}</Icon>
);
ArrowUpIcon.displayName = "ArrowUpIcon";
