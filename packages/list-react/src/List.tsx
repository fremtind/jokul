import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

type validLists = "unordered" | "ordered";

function makeListComponent(listType: validLists) {
    return function List(props: Props) {
        const { children, className = "jkl-p" } = props;
        const componentClassName = "jkl-list".concat(
            className ? ` ${className}` : "",
            listType === "ordered" ? " jkl-list--ordered" : "",
        );

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
