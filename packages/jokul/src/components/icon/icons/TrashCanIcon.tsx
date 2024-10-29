import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const TrashCanIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue92e"}</Icon>
);
TrashCanIcon.displayName = "TrashCanIcon";
