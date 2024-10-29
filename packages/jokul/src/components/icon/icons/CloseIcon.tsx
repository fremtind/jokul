import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const CloseIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5cd"}</Icon>
);
CloseIcon.displayName = "CloseIcon";
