import { makeIconComponent } from "../../IconFactory";
import { InfoMedium } from "./InfoMedium";
import { InfoMediumBold } from "./InfoMediumBold";
import { InfoSmall } from "./InfoSmall";
import { InfoSmallBold } from "./InfoSmallBold";

export const InfoIcon = makeIconComponent({
    bold: {
        small: InfoSmallBold,
        medium: InfoMediumBold,
        inherit: InfoMediumBold,
    },
    regular: {
        small: InfoSmall,
        medium: InfoMedium,
        inherit: InfoMedium,
    },
});

InfoIcon.displayName = "InfoIcon";
