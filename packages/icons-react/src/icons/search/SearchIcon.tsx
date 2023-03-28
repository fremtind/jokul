import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { SearchMedium } from "./SearchMedium";
import { SearchMediumBold } from "./SearchMediumBold";
import { SearchSmall } from "./SearchSmall";
import { SearchSmallBold } from "./SearchSmallBold";

export const SearchIcon: FC<IconProps> = makeIconComponent({
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
