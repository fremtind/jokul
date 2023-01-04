import { makeIconComponent } from "../../NewIconFactory";
import { ArrowNorthEastMedium } from "./ArrowNorthEastMedium";
import { ArrowNorthEastMediumBold } from "./ArrowNorthEastMediumBold";
import { ArrowNorthEastSmall } from "./ArrowNorthEastSmall";
import { ArrowNorthEastSmallBold } from "./ArrowNorthEastSmallBold";

export const ArrowNorthEastIcon = makeIconComponent({
    bold: {
        small: ArrowNorthEastSmallBold,
        medium: ArrowNorthEastMediumBold,
        inherit: ArrowNorthEastMediumBold,
    },
    regular: {
        small: ArrowNorthEastSmall,
        medium: ArrowNorthEastMedium,
        inherit: ArrowNorthEastMedium,
    },
});

ArrowNorthEastIcon.displayName = "ArrowNorthEastIcon";
