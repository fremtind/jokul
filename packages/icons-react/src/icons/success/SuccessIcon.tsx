import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { SuccessMedium } from "./SuccessMedium";
import { SuccessSmall } from "./SuccessSmall";

export const SuccessIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: SuccessSmall,
        medium: SuccessMedium,
        inherit: SuccessMedium,
    },
    regular: {
        small: SuccessSmall,
        medium: SuccessMedium,
        inherit: SuccessMedium,
    },
});

SuccessIcon.displayName = "SuccessIcon";
