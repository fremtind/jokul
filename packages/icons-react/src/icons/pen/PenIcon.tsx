import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { PenMedium } from "./PenMedium";
import { PenMediumBold } from "./PenMediumBold";
import { PenSmall } from "./PenSmall";
import { PenSmallBold } from "./PenSmallBold";

export const PenIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: PenSmallBold,
        medium: PenMediumBold,
        inherit: PenMediumBold,
    },
    regular: {
        small: PenSmall,
        medium: PenMedium,
        inherit: PenMedium,
    },
});

PenIcon.displayName = "PenIcon";
