import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ChevronRightIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue315"}</Icon>;
ChevronRightIcon.displayName = "ChevronRightIcon";
