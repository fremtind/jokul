import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ArrowUpMedium } from "./ArrowUpMedium";
import { ArrowUpMediumBold } from "./ArrowUpMediumBold";
import { ArrowUpSmall } from "./ArrowUpSmall";
import { ArrowUpSmallBold } from "./ArrowUpSmallBold";

export const ArrowUpIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ArrowUpSmallBold,
        medium: ArrowUpMediumBold,
        inherit: ArrowUpMediumBold,
    },
    regular: {
        small: ArrowUpSmall,
        medium: ArrowUpMedium,
        inherit: ArrowUpMedium,
    },
});

ArrowUpIcon.displayName = "ArrowUpIcon";
