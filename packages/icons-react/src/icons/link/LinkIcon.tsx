import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { LinkMedium } from "./LinkMedium";
import { LinkMediumBold } from "./LinkMediumBold";
import { LinkSmall } from "./LinkSmall";
import { LinkSmallBold } from "./LinkSmallBold";

export const LinkIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: LinkSmallBold,
        medium: LinkMediumBold,
        inherit: LinkMediumBold,
    },
    regular: {
        small: LinkSmall,
        medium: LinkMedium,
        inherit: LinkMedium,
    },
});

LinkIcon.displayName = "LinkIcon";
