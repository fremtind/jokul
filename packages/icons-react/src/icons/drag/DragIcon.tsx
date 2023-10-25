import { FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { IconProps } from "../types";
import { DragMedium } from "./DragMedium";
import { DragMediumBold } from "./DragMediumBold";
import { DragSmall } from "./DragSmall";
import { DragSmallBold } from "./DragSmallBold";

export const DragIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: DragSmallBold,
        medium: DragMediumBold,
        inherit: DragMediumBold,
    },
    regular: {
        small: DragSmall,
        medium: DragMedium,
        inherit: DragMedium,
    },
});

DragIcon.displayName = "DragIcon";
