import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ThumbDownIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue8db"}</Icon>
);
ThumbDownIcon.displayName = "ThumbDownIcon";
