import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import { type IconProps } from "../types.js";

export const QuestionIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\ue8fd"}</Icon>
);
QuestionIcon.displayName = "QuestionIcon";
