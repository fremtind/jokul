import React from "react";
import { Icon } from "../Icon";
import { type IconProps } from "../types";

export const WarningIcon = (props: IconProps) => (
    <Icon bold filled {...props}>
        {"\uf083"}
    </Icon>
);
