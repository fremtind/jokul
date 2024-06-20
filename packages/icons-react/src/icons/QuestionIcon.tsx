import React from "react";
import { Icon, type IconComponent } from "../Icon";
import { type IconProps } from "../types";

export const QuestionIcon: IconComponent = (props: IconProps) => <Icon {...props}>{"\ue8fd"}</Icon>;
QuestionIcon.displayName = "QuestionIcon";
