import clsx from "clsx";
import React, { type FC } from "react";
import type { ListProps } from "./types.js";

type ValidLists = "unordered" | "ordered";

function makeListComponent(listType: ValidLists): FC<ListProps> {
    const BaseList: FC<ListProps> = ({ children, className, ...rest }) => {
        const C = listType === "ordered" ? "ol" : "ul";

        return (
            <C
                className={clsx("jkl-list", className, {
                    "jkl-list--ordered": listType === "ordered",
                })}
                data-testid="jkl-list"
                {...rest}
            >
                {children}
            </C>
        );
    };
    return BaseList;
}

export const UnorderedList = makeListComponent("unordered");
UnorderedList.displayName = "UnorderedList";
export const OrderedList = makeListComponent("ordered");
OrderedList.displayName = "OrderedList";
export const List = UnorderedList;
List.displayName = "List";
