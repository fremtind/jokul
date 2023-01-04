import { makeIconComponent } from "../../NewIconFactory";
import { DotsMedium } from "./DotsMedium";
import { DotsMediumBold } from "./DotsMediumBold";
import { DotsSmall } from "./DotsSmall";
import { DotsSmallBold } from "./DotsSmallBold";

export const DotsIcon = makeIconComponent({
    bold: {
        small: DotsSmallBold,
        medium: DotsMediumBold,
        inherit: DotsMediumBold,
    },
    regular: {
        small: DotsSmall,
        medium: DotsMedium,
        inherit: DotsMedium,
    },
});

DotsIcon.displayName = "DotsIcon";
