import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const HamburgerIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue5d2"}</Icon>;
HamburgerIcon.displayName = "HamburgerIcon";
