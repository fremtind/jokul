import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ChevronLeftIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue314"}</Icon>;
ChevronLeftIcon.displayName = "ChevronLeftIcon";
