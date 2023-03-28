import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ArrowRightMedium } from "./ArrowRightMedium";
import { ArrowRightMediumBold } from "./ArrowRightMediumBold";
import { ArrowRightSmall } from "./ArrowRightSmall";
import { ArrowRightSmallBold } from "./ArrowRightSmallBold";

export const ArrowRightIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ArrowRightSmallBold,
        medium: ArrowRightMediumBold,
        inherit: ArrowRightMediumBold,
    },
    regular: {
        small: ArrowRightSmall,
        medium: ArrowRightMedium,
        inherit: ArrowRightMedium,
    },
});

ArrowRightIcon.displayName = "ArrowRightIcon";
