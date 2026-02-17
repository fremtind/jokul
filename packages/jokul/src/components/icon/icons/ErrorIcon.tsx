import React from "react";
import { Icon, type IconComponent } from "../Icon.js";

export const ErrorIcon: IconComponent = (props) => (
    <Icon bold filled {...props}>
        {"\uf8b6"}
    </Icon>
);
