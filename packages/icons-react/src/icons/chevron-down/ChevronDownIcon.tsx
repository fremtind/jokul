import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ChevronDownMedium } from "./ChevronDownMedium";
import { ChevronDownMediumBold } from "./ChevronDownMediumBold";
import { ChevronDownSmall } from "./ChevronDownSmall";
import { ChevronDownSmallBold } from "./ChevronDownSmallBold";

export const ChevronDownIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ChevronDownSmallBold,
        medium: ChevronDownMediumBold,
        inherit: ChevronDownMediumBold,
    },
    regular: {
        small: ChevronDownSmall,
        medium: ChevronDownMedium,
        inherit: ChevronDownMedium,
    },
});

ChevronDownIcon.displayName = "ChevronDownIcon";
