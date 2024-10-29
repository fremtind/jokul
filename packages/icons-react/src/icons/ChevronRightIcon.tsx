import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ChevronRightIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue315"}</Icon>
);
ChevronRightIcon.displayName = "ChevronRightIcon";
