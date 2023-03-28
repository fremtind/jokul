import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ChevronRightMedium } from "./ChevronRightMedium";
import { ChevronRightMediumBold } from "./ChevronRightMediumBold";
import { ChevronRightSmall } from "./ChevronRightSmall";
import { ChevronRightSmallBold } from "./ChevronRightSmallBold";

export const ChevronRightIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ChevronRightSmallBold,
        medium: ChevronRightMediumBold,
        inherit: ChevronRightMediumBold,
    },
    regular: {
        small: ChevronRightSmall,
        medium: ChevronRightMedium,
        inherit: ChevronRightMedium,
    },
});

ChevronRightIcon.displayName = "ChevronRightIcon";
