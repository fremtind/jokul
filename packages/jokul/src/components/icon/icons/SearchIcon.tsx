import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const SearchIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue8b6"}</Icon>
);
SearchIcon.displayName = "SearchIcon";
