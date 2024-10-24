import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const InfoIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\ue88e"}
    </Icon>
);
InfoIcon.displayName = "InfoIcon";
