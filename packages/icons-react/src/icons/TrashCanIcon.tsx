import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const TrashCanIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue92e"}</Icon>;
TrashCanIcon.displayName = "TrashCanIcon";
