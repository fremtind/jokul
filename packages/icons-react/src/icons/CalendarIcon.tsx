import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const CalendarIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\uebcc"}</Icon>
);
CalendarIcon.displayName = "CalendarIcon";
