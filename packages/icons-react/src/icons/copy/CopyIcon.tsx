import { makeIconComponent } from "../../NewIconFactory";
import { CopyMedium } from "./CopyMedium";
import { CopyMediumBold } from "./CopyMediumBold";
import { CopySmall } from "./CopySmall";
import { CopySmallBold } from "./CopySmallBold";

export const CopyIcon = makeIconComponent({
    bold: {
        small: CopySmallBold,
        medium: CopyMediumBold,
        inherit: CopyMediumBold,
    },
    regular: {
        small: CopySmall,
        medium: CopyMedium,
        inherit: CopyMedium,
    },
});

CopyIcon.displayName = "CopyIcon";
