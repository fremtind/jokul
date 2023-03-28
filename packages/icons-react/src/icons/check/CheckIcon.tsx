import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { CheckMedium } from "./CheckMedium";
import { CheckMediumBold } from "./CheckMediumBold";
import { CheckSmall } from "./CheckSmall";
import { CheckSmallBold } from "./CheckSmallBold";

export const CheckIcon: FC<IconProps> = makeIconComponent({
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
