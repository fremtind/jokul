import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const InfoIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\ue88e"}
    </Icon>
);
InfoIcon.displayName = "InfoIcon";
