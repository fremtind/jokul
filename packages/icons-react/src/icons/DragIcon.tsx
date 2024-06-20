import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const DragIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue945"}</Icon>;
DragIcon.displayName = "DragIcon";
