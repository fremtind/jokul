import { FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { IconProps } from "../types";
import { GreenCheck } from "./GreenCheck";

export const GreenCheckIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: GreenCheck,
        medium: GreenCheck,
        inherit: GreenCheck,
    },
    regular: {
        small: GreenCheck,
        medium: GreenCheck,
        inherit: GreenCheck,
    },
});

GreenCheckIcon.displayName = "GreenCheckIcon";
