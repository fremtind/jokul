import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const PenIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\uf097"}</Icon>;
PenIcon.displayName = "PenIcon";
