import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    className?: string;
}

type validLists = "unordered" | "ordered";

function makeListComponent(listType: validLists) {
    return function List(props: Props) {
        const { children, className = "jkl-body" } = props;
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
