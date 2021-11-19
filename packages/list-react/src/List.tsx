import React, { FC } from "react";
import classNames from "classnames";

interface Props {
    className?: string;
}

type validLists = "unordered" | "ordered";

function makeListComponent(listType: validLists): FC<Props> {
    const BaseList: FC<Props> = ({ children, className = "jkl-body" }) => {
        const componentClassName = classNames("jkl-list", className, {
            "jkl-list--ordered": listType === "ordered",
        });

        const C = listType === "ordered" ? "ol" : "ul";

        return (
            <C data-testid="jkl-list" className={componentClassName}>
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
