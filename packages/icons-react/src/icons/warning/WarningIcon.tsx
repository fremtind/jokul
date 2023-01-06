import { makeIconComponent } from "../../IconFactory";
import { WarningMedium } from "./WarningMedium";
import { WarningSmall } from "./WarningSmall";

export const WarningIcon = makeIconComponent({
    bold: {
        small: WarningSmall,
        medium: WarningMedium,
        inherit: WarningMedium,
    },
    regular: {
        small: WarningSmall,
        medium: WarningMedium,
        inherit: WarningMedium,
    },
});

WarningIcon.displayName = "WarningIcon";
