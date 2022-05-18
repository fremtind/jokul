import { WithChildren } from "@fremtind/jkl-core";
import cx from "classnames";
import React, { FC } from "react";

export interface ListItemProps extends WithChildren {
    className?: string;
}

type ValidListItems = "normal" | "check" | "cross";

function makeListItem(listItemType: ValidListItems): FC<ListItemProps> {
    const ListItem: FC<ListItemProps> = ({ className, children, ...rest }) => {
        return (
            <li
                className={cx("jkl-list__item", className, {
                    "jkl-list__item--iconed": listItemType !== "normal",
                    "jkl-list__item--check": listItemType === "check",
                    "jkl-list__item--cross": listItemType === "cross",
                })}
                data-testid="jkl-list-item"
                {...rest}
            >
                {children}
            </li>
        );
    };
    return ListItem;
}

export const ListItem = makeListItem("normal");
ListItem.displayName = "ListItem";
export const CrossListItem = makeListItem("cross");
CrossListItem.displayName = "CrossListItem";
export const CheckListItem = makeListItem("check");
CheckListItem.displayName = "CheckListItem";
