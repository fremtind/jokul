import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const CheckIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue5ca"}</Icon>
);
CheckIcon.displayName = "CheckIcon";
