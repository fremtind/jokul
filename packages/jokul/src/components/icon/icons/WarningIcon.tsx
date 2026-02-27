import React from "react";
import { Icon, type IconComponent } from "../Icon.js";

export const WarningIcon: IconComponent = (props) => (
    <Icon bold filled {...props}>
        {"\uf083"}
    </Icon>
);
