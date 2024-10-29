import React from "react";
import { Icon, IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ArrowNorthEastIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\uf1e1"}</Icon>
);
ArrowNorthEastIcon.displayName = "ArrowNorthEastIcon";
