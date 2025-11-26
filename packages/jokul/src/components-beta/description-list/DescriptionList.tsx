import clsx from "clsx";
import React from "react";
import { DescriptionListItem } from "./DescriptionListItem.js";
import type { DescriptionListProps } from "./types.js";

/**
 * @deprecated Bruk heller den stabile komponenten. All funksjonalitet fra Beta-komponenten er tilgjengelige der.
 */
export const DescriptionList = ({
    className,
    alignment = "horizontal",
    showSeparators = false,
    children,
    ...rest
}: DescriptionListProps): React.JSX.Element => {
    return (
        <dl
            {...rest}
            className={clsx("jkl-description-list--beta", className)}
            data-alignment={alignment}
            data-separators={showSeparators}
        >
            {children}
        </dl>
    );
};

DescriptionList.Item = DescriptionListItem;
