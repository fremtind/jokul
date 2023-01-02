import { makeIconComponent } from "../../NewIconFactory";
import { SearchMedium } from "./SearchMedium";
import { SearchMediumBold } from "./SearchMediumBold";
import { SearchSmall } from "./SearchSmall";
import { SearchSmallBold } from "./SearchSmallBold";

export const SearchIcon = makeIconComponent({
    bold: {
        small: SearchSmallBold,
        medium: SearchMediumBold,
        inherit: SearchMediumBold,
    },
    regular: {
        small: SearchSmall,
        medium: SearchMedium,
        inherit: SearchMedium,
    },
});
SearchIcon.displayName = "SearchIcon";
