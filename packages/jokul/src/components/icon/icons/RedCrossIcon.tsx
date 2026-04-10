import clsx from "clsx";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const RedCrossIcon: IconComponent = (props: IconProps) => (
    <Icon {...props} className={clsx("jkl-icon-red-cross", props.className)}>
        {"\ue5cd"}
    </Icon>
);
RedCrossIcon.displayName = "RedCrossIcon";
