import React, { FC } from "react";
import cn from "classnames";

interface Props {
    className?: string;
}

type validListItems = "normal" | "check" | "cross";

function makeListItem(listItemType: validListItems): FC<Props> {
    const ListItem: FC<Props> = ({ className = "", children }) => {
        return (
            <li
                className={cn("jkl-list__item", {
                    "jkl-list__item__iconed": listItemType !== "normal",
                    "jkl-list__item--check": listItemType === "check",
                    "jkl-list__item--cross": listItemType === "cross",
                    className,
                })}
            >
                {children}
            </li>
        );
    };
    return ListItem;
}

export const ListItem = makeListItem("normal");
export const CrossListItem = makeListItem("cross");
export const CheckListItem = makeListItem("check");
