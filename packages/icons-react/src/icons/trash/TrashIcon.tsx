import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { TrashMedium } from "./TrashMedium";
import { TrashMediumBold } from "./TrashMediumBold";
import { TrashSmall } from "./TrashSmall";
import { TrashSmallBold } from "./TrashSmallBold";

export const TrashIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: TrashSmallBold,
        medium: TrashMediumBold,
        inherit: TrashMediumBold,
    },
    regular: {
        small: TrashSmall,
        medium: TrashMedium,
        inherit: TrashMedium,
    },
});

TrashIcon.displayName = "TrashIcon";
