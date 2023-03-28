import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { QuestionMedium } from "./QuestionMedium";
import { QuestionMediumBold } from "./QuestionMediumBold";
import { QuestionSmall } from "./QuestionSmall";
import { QuestionSmallBold } from "./QuestionSmallBold";

export const QuestionIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: QuestionSmallBold,
        medium: QuestionMediumBold,
        inherit: QuestionMediumBold,
    },
    regular: {
        small: QuestionSmall,
        medium: QuestionMedium,
        inherit: QuestionMedium,
    },
});

QuestionIcon.displayName = "QuestionIcon";
