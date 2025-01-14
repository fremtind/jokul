import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const OpenInNewIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue89e"}</Icon>
);
OpenInNewIcon.displayName = "OpenInNewIcon";
