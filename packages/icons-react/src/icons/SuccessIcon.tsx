import React from "react";
import { Icon } from "../Icon";
import { type IconProps } from "../types";

export const SuccessIcon = (props: IconProps) => (
    <Icon bold filled {...props}>
        check_circle
    </Icon>
);
