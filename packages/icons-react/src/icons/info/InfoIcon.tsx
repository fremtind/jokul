import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { InfoMedium } from "./InfoMedium";
import { InfoMediumBold } from "./InfoMediumBold";
import { InfoSmall } from "./InfoSmall";
import { InfoSmallBold } from "./InfoSmallBold";

export const InfoIcon: FC<IconProps> = makeIconComponent({
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
