import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { ErrorMedium } from "./ErrorMedium";
import { ErrorMediumBold } from "./ErrorMediumBold";
import { ErrorSmall } from "./ErrorSmall";
import { ErrorSmallBold } from "./ErrorSmallBold";

export const ErrorIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: ErrorSmallBold,
        medium: ErrorMediumBold,
        inherit: ErrorMediumBold,
    },
    regular: {
        small: ErrorSmall,
        medium: ErrorMedium,
        inherit: ErrorMedium,
    },
});

ErrorIcon.displayName = "ErrorIcon";
