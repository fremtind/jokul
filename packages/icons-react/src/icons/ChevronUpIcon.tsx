import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ChevronUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue316"}</Icon>
);
ChevronUpIcon.displayName = "ChevronUpIcon";
