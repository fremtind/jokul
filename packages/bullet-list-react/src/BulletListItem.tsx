import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const BulletListItem = ({ children }: Props) => {
    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: The packages '@fremtind/jkl-bullet-list-react' & '@fremtind/jkl-bullet-list' are deprecated and replaced by '@fremtind/jkl-list-react' and '@fremtind/jkl-list'. Please use the `ListItem` component from @fremtind/jkl-list-react instead.",
        );
    }
    return <li className="jkl-bullet-list__item">{children}</li>;
};
