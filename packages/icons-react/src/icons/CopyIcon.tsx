import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const CopyIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue14d"}</Icon>
);
CopyIcon.displayName = "CopyIcon";
