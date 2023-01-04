import { makeIconComponent } from "../../NewIconFactory";
import { WarningMedium } from "./WarningMedium";
import { WarningMediumBold } from "./WarningMediumBold";
import { WarningSmall } from "./WarningSmall";
import { WarningSmallBold } from "./WarningSmallBold";

export const WarningIcon = makeIconComponent({
    bold: {
        small: WarningSmallBold,
        medium: WarningMediumBold,
        inherit: WarningMediumBold,
    },
    regular: {
        small: WarningSmall,
        medium: WarningMedium,
        inherit: WarningMedium,
    },
});

WarningIcon.displayName = "WarningIcon";
