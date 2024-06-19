import React from "react";
import { Icon } from "../Icon";
import { type IconProps } from "../types";

export const SuccessIcon = (props: IconProps) => (
    <Icon {...props} bold filled>
        check_circle
    </Icon>
);
