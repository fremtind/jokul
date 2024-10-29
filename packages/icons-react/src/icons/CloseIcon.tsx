import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const CloseIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5cd"}</Icon>
);
CloseIcon.displayName = "CloseIcon";
