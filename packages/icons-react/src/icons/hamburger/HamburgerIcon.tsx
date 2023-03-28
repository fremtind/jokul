import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { HamburgerMedium } from "./HamburgerMedium";
import { HamburgerMediumBold } from "./HamburgerMediumBold";
import { HamburgerSmall } from "./HamburgerSmall";
import { HamburgerSmallBold } from "./HamburgerSmallBold";

export const HamburgerIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: HamburgerSmallBold,
        medium: HamburgerMediumBold,
        inherit: HamburgerMediumBold,
    },
    regular: {
        small: HamburgerSmall,
        medium: HamburgerMedium,
        inherit: HamburgerMedium,
    },
});

HamburgerIcon.displayName = "HamburgerIcon";
