import React from "react";
import classNames from "classnames";

interface Props {
    className?: string;
}

type validLists = "unordered" | "ordered";

function makeListComponent(listType: validLists): React.FC<Props> {
    return ({ children, className = "jkl-body" }) => {
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
}

export const UnorderedList = makeListComponent("unordered");
export const OrderedList = makeListComponent("ordered");
export const List = UnorderedList;
