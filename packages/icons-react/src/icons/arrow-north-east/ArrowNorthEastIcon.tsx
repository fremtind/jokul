import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ArrowNorthEastMedium } from "./ArrowNorthEastMedium";
import { ArrowNorthEastMediumBold } from "./ArrowNorthEastMediumBold";
import { ArrowNorthEastSmall } from "./ArrowNorthEastSmall";
import { ArrowNorthEastSmallBold } from "./ArrowNorthEastSmallBold";

export const ArrowNorthEastIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ArrowNorthEastSmallBold,
        medium: ArrowNorthEastMediumBold,
        inherit: ArrowNorthEastMediumBold,
    },
    regular: {
        small: ArrowNorthEastSmall,
        medium: ArrowNorthEastMedium,
        inherit: ArrowNorthEastMedium,
    },
});

ArrowNorthEastIcon.displayName = "ArrowNorthEastIcon";
