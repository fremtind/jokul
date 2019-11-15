import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const BulletList = ({ children, className = "jkl-p" }: Props) => {
    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: The packages 'bullet-list-react' & 'bullet-list' are deprecated and replaced by 'list-react' and 'list'. See developer documentation for further details.",
        );
    }

    return <ul className={`jkl-bullet-list ${className}`}>{children}</ul>;
};
