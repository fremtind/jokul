import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const UploadIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\uf09b"}</Icon>
);
UploadIcon.displayName = "UploadIcon";
