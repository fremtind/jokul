import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const PlusIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue145"}</Icon>;
PlusIcon.displayName = "PlusIcon";
