import { makeIconComponent } from "../../NewIconFactory";
import { SuccessMedium } from "./SuccessMedium";
import { SuccessMediumBold } from "./SuccessMediumBold";
import { SuccessSmall } from "./SuccessSmall";
import { SuccessSmallBold } from "./SuccessSmallBold";

export const SuccessIcon = makeIconComponent({
    bold: {
        small: SuccessSmallBold,
        medium: SuccessMediumBold,
        inherit: SuccessMediumBold,
    },
    regular: {
        small: SuccessSmall,
        medium: SuccessMedium,
        inherit: SuccessMedium,
    },
});

SuccessIcon.displayName = "SuccessIcon";
