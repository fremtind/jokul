import { makeIconComponent } from "../../NewIconFactory";
import { CheckMedium } from "./CheckMedium";
import { CheckMediumBold } from "./CheckMediumBold";
import { CheckSmall } from "./CheckSmall";
import { CheckSmallBold } from "./CheckSmallBold";

export const CheckIcon = makeIconComponent({
    bold: {
        small: CheckSmallBold,
        medium: CheckMediumBold,
        inherit: CheckMediumBold,
    },
    regular: {
        small: CheckSmall,
        medium: CheckMedium,
        inherit: CheckMedium,
    },
});

CheckIcon.displayName = "CheckIcon";
