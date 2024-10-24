import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const DragIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue945"}</Icon>;
DragIcon.displayName = "DragIcon";
