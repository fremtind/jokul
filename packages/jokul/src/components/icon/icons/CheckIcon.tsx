import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const CheckIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5ca"}</Icon>
);
CheckIcon.displayName = "CheckIcon";
