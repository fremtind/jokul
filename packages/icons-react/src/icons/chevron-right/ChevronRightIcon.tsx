import { makeIconComponent } from "../../NewIconFactory";
import { ChevronRightMedium } from "./ChevronRightMedium";
import { ChevronRightMediumBold } from "./ChevronRightMediumBold";
import { ChevronRightSmall } from "./ChevronRightSmall";
import { ChevronRightSmallBold } from "./ChevronRightSmallBold";

export const ChevronRightIcon = makeIconComponent({
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
