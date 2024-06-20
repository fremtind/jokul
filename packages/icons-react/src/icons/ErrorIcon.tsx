import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const ErrorIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf8b6"}
    </Icon>
);
ErrorIcon.displayName = "ErrorIcon";
