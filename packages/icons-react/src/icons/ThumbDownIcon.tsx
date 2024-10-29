import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ThumbDownIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue8db"}</Icon>
);
ThumbDownIcon.displayName = "ThumbDownIcon";
