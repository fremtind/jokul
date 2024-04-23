import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { TrashCanMedium } from "./TrashCanMedium";
import { TrashCanMediumBold } from "./TrashCanMediumBold";
import { TrashCanSmall } from "./TrashCanSmall";
import { TrashCanSmallBold } from "./TrashCanSmallBold";

export const TrashCanIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: TrashCanSmallBold,
        medium: TrashCanMediumBold,
        inherit: TrashCanMediumBold,
    },
    regular: {
        small: TrashCanSmall,
        medium: TrashCanMedium,
        inherit: TrashCanMedium,
    },
});

TrashCanIcon.displayName = "TrashCanIcon";
