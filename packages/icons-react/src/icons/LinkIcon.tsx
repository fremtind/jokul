import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const LinkIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue250"}</Icon>;
LinkIcon.displayName = "LinkIcon";
