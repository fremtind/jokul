import { makeIconComponent } from "../../IconFactory";
import { ChevronUpMedium } from "./ChevronUpMedium";
import { ChevronUpMediumBold } from "./ChevronUpMediumBold";
import { ChevronUpSmall } from "./ChevronUpSmall";
import { ChevronUpSmallBold } from "./ChevronUpSmallBold";

export const ChevronUpIcon = makeIconComponent({
    bold: {
        small: ChevronUpSmallBold,
        medium: ChevronUpMediumBold,
        inherit: ChevronUpMediumBold,
    },
    regular: {
        small: ChevronUpSmall,
        medium: ChevronUpMedium,
        inherit: ChevronUpMedium,
    },
});

ChevronUpIcon.displayName = "ChevronUpIcon";
