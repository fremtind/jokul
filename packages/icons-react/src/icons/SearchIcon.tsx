import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const SearchIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue8b6"}</Icon>
);
SearchIcon.displayName = "SearchIcon";
