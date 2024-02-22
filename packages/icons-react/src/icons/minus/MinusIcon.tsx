import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { MinusMedium } from "./MinusMedium";
import { MinusMediumBold } from "./MinusMediumBold";
import { MinusSmall } from "./MinusSmall";
import { MinusSmallBold } from "./MinusSmallBold";

export const MinusIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: MinusSmallBold,
        medium: MinusMediumBold,
        inherit: MinusMediumBold,
    },
    regular: {
        small: MinusSmall,
        medium: MinusMedium,
        inherit: MinusMedium,
    },
});

MinusIcon.displayName = "MinusIcon";
