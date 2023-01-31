import { makeIconComponent } from "../../IconFactory";
import { ArrowRightMedium } from "./ArrowRightMedium";
import { ArrowRightMediumBold } from "./ArrowRightMediumBold";
import { ArrowRightSmall } from "./ArrowRightSmall";
import { ArrowRightSmallBold } from "./ArrowRightSmallBold";

export const ArrowRightIcon = makeIconComponent({
    bold: {
        small: ArrowRightSmallBold,
        medium: ArrowRightMediumBold,
        inherit: ArrowRightMediumBold,
    },
    regular: {
        small: ArrowRightSmall,
        medium: ArrowRightMedium,
        inherit: ArrowRightMedium,
    },
});

ArrowRightIcon.displayName = "ArrowRightIcon";
