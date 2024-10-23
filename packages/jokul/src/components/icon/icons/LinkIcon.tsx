import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const LinkIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue250"}</Icon>;
LinkIcon.displayName = "LinkIcon";
