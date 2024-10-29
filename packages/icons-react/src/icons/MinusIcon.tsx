import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const MinusIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue15b"}</Icon>
);
MinusIcon.displayName = "MinusIcon";
