import clsx from "clsx";
import type React from "react";
import { DescriptionListItem } from "./DescriptionListItem.js";
import type { DescriptionListProps } from "./types.js";

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
