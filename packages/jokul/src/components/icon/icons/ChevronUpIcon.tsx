import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ChevronUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue316"}</Icon>
);
ChevronUpIcon.displayName = "ChevronUpIcon";
