import { makeIconComponent } from "../../NewIconFactory";
import { ArrowLeftMedium } from "./ArrowLeftMedium";
import { ArrowLeftMediumBold } from "./ArrowLeftMediumBold";
import { ArrowLeftSmall } from "./ArrowLeftSmall";
import { ArrowLeftSmallBold } from "./ArrowLeftSmallBold";

export const ArrowLeftIcon = makeIconComponent({
    bold: {
        small: ArrowLeftSmallBold,
        medium: ArrowLeftMediumBold,
        inherit: ArrowLeftMediumBold,
    },
    regular: {
        small: ArrowLeftSmall,
        medium: ArrowLeftMedium,
        inherit: ArrowLeftMedium,
    },
});

ArrowLeftIcon.displayName = "ArrowLeftIcon";
