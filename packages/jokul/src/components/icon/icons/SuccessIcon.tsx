import React from "react";
import { Icon, type IconComponent } from "../Icon.js";

export const SuccessIcon: IconComponent = (props) => (
    <Icon bold filled {...props}>
        {"\uf0be"}
    </Icon>
);
