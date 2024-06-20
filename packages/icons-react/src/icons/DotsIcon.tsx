import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const DotsIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue5d3"}</Icon>;
DotsIcon.displayName = "DotsIcon";
