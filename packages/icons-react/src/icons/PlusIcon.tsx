import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const PlusIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue145"}</Icon>
);
PlusIcon.displayName = "PlusIcon";
