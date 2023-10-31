import { FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { IconProps } from "../types";
import { RedCross } from "./RedCross";

export const RedCrossIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: RedCross,
        medium: RedCross,
        inherit: RedCross,
    },
    regular: {
        small: RedCross,
        medium: RedCross,
        inherit: RedCross,
    },
});

RedCrossIcon.displayName = "RedCrossIcon";
