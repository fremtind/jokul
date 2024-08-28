import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ThumbUpIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue8dc"}</Icon>;
ThumbUpIcon.displayName = "ThumbUpIcon";
