import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ChevronLeftIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue314"}</Icon>;
ChevronLeftIcon.displayName = "ChevronLeftIcon";
