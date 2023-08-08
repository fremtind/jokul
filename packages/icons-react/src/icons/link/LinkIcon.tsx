import { type FC } from "react";
import { makeIconComponent } from "../../IconFactory";
import { type IconProps } from "../types";
import { LinkMedium } from "./LinkIconMedium";
import { LinkSmall } from "./LinkIconSmall";

export const LinkIcon: FC<IconProps> = makeIconComponent({
    bold: {
        small: LinkSmall,
        medium: LinkMedium,
        inherit: LinkMedium,
    },
    regular: {
        small: LinkSmall,
        medium: LinkMedium,
        inherit: LinkMedium,
    },
});

LinkIcon.displayName = "LinkIcon";
