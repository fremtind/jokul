import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { WarningMedium } from "./WarningMedium";
import { WarningSmall } from "./WarningSmall";

export const WarningIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: WarningSmall,
        medium: WarningMedium,
        inherit: WarningMedium,
    },
    regular: {
        small: WarningSmall,
        medium: WarningMedium,
        inherit: WarningMedium,
    },
});

WarningIcon.displayName = "WarningIcon";
