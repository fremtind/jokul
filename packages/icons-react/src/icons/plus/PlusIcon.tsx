import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { PlusMedium } from "./PlusMedium";
import { PlusMediumBold } from "./PlusMediumBold";
import { PlusSmall } from "./PlusSmall";
import { PlusSmallBold } from "./PlusSmallBold";

export const PlusIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: PlusSmallBold,
        medium: PlusMediumBold,
        inherit: PlusMediumBold,
    },
    regular: {
        small: PlusSmall,
        medium: PlusMedium,
        inherit: PlusMedium,
    },
});

PlusIcon.displayName = "PlusIcon";
