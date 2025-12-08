import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const PenIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>{"\uf604"}</Icon>
);
PenIcon.displayName = "PenIcon";
