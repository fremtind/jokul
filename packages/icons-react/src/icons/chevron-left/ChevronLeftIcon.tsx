import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ChevronLeftMedium } from "./ChevronLeftMedium";
import { ChevronLeftMediumBold } from "./ChevronLeftMediumBold";
import { ChevronLeftSmall } from "./ChevronLeftSmall";
import { ChevronLeftSmallBold } from "./ChevronLeftSmallBold";

export const ChevronLeftIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ChevronLeftSmallBold,
        medium: ChevronLeftMediumBold,
        inherit: ChevronLeftMediumBold,
    },
    regular: {
        small: ChevronLeftSmall,
        medium: ChevronLeftMedium,
        inherit: ChevronLeftMedium,
    },
});

ChevronLeftIcon.displayName = "ChevronLeftIcon";
