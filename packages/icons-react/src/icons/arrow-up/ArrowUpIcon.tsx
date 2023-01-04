import { makeIconComponent } from "../../NewIconFactory";
import { ArrowUpMedium } from "./ArrowUpMedium";
import { ArrowUpMediumBold } from "./ArrowUpMediumBold";
import { ArrowUpSmall } from "./ArrowUpSmall";
import { ArrowUpSmallBold } from "./ArrowUpSmallBold";

export const ArrowUpIcon = makeIconComponent({
    bold: {
        small: ArrowUpSmallBold,
        medium: ArrowUpMediumBold,
        inherit: ArrowUpMediumBold,
    },
    regular: {
        small: ArrowUpSmall,
        medium: ArrowUpMedium,
        inherit: ArrowUpMedium,
    },
});

ArrowUpIcon.displayName = "ArrowUpIcon";
