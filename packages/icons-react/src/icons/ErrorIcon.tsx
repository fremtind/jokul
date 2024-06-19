import React from "react";
import { Icon } from "../Icon";
import { type IconProps } from "../types";

export const ErrorIcon = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf8b6"}
    </Icon>
);
