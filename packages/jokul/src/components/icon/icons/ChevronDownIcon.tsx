import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const ChevronDownIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue313"}</Icon>;
ChevronDownIcon.displayName = "ChevronDownIcon";
