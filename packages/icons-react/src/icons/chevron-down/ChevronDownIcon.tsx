import { makeIconComponent } from "../../IconFactory";
import { ChevronDownMedium } from "./ChevronDownMedium";
import { ChevronDownMediumBold } from "./ChevronDownMediumBold";
import { ChevronDownSmall } from "./ChevronDownSmall";
import { ChevronDownSmallBold } from "./ChevronDownSmallBold";

export const ChevronDownIcon = makeIconComponent({
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
