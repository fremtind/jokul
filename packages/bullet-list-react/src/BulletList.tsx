import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const BulletList = ({ children, className = "jkl-p" }: Props) => {
    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: The packages '@fremtind/jkl-bullet-list-react' & '@fremtind/jkl-bullet-list' are deprecated and replaced by '@fremtind/jkl-list-react' and '@fremtind/jkl-list'. Please use the `List` component from @fremtind/jkl-list-react instead.",
        );
    }

    return <ul className={`jkl-bullet-list ${className}`}>{children}</ul>;
};
