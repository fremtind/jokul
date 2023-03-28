import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ArrowDownMedium } from "./ArrowDownMedium";
import { ArrowDownMediumBold } from "./ArrowDownMediumBold";
import { ArrowDownSmall } from "./ArrowDownSmall";
import { ArrowDownSmallBold } from "./ArrowDownSmallBold";

export const ArrowDownIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ArrowDownSmallBold,
        medium: ArrowDownMediumBold,
        inherit: ArrowDownMediumBold,
    },
    regular: {
        small: ArrowDownSmall,
        medium: ArrowDownMedium,
        inherit: ArrowDownMedium,
    },
});

ArrowDownIcon.displayName = "ArrowDownIcon";
