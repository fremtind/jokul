import { makeIconComponent } from "../../IconFactory";
import { SuccessMedium } from "./SuccessMedium";
import { SuccessSmall } from "./SuccessSmall";

export const SuccessIcon = makeIconComponent({
    bold: {
        small: SuccessSmall,
        medium: SuccessMedium,
        inherit: SuccessMedium,
    },
    regular: {
        small: SuccessSmall,
        medium: SuccessMedium,
        inherit: SuccessMedium,
    },
});

SuccessIcon.displayName = "SuccessIcon";
