import { makeIconComponent } from "../../IconFactory";
import { CalendarMedium } from "./CalendarMedium";
import { CalendarMediumBold } from "./CalendarMediumBold";
import { CalendarSmall } from "./CalendarSmall";
import { CalendarSmallBold } from "./CalendarSmallBold";

export const CalendarIcon = makeIconComponent({
    bold: {
        small: CalendarSmallBold,
        medium: CalendarMediumBold,
        inherit: CalendarMediumBold,
    },
    regular: {
        small: CalendarSmall,
        medium: CalendarMedium,
        inherit: CalendarMedium,
    },
});

CalendarIcon.displayName = "CalendarIcon";
