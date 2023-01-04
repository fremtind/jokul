import { makeIconComponent } from "../../IconFactory";
import { CloseMedium } from "./CloseMedium";
import { CloseMediumBold } from "./CloseMediumBold";
import { CloseSmall } from "./CloseSmall";
import { CloseSmallBold } from "./CloseSmallBold";

export const CloseIcon = makeIconComponent({
    bold: {
        small: CloseSmallBold,
        medium: CloseMediumBold,
        inherit: CloseMediumBold,
    },
    regular: {
        small: CloseSmall,
        medium: CloseMedium,
        inherit: CloseMedium,
    },
});

CloseIcon.displayName = "CloseIcon";
