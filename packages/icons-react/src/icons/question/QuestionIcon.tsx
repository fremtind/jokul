import { makeIconComponent } from "../../NewIconFactory";
import { QuestionMedium } from "./QuestionMedium";
import { QuestionMediumBold } from "./QuestionMediumBold";
import { QuestionSmall } from "./QuestionSmall";
import { QuestionSmallBold } from "./QuestionSmallBold";

export const QuestionIcon = makeIconComponent({
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
