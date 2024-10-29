import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const DotsIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5d3"}</Icon>
);
DotsIcon.displayName = "DotsIcon";
