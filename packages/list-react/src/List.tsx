import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    ordered?: boolean;
}

export const List = ({ children, className = "jkl-p", ordered }: Props) => {
    const componentClassName = "jkl-list".concat(className ? ` ${className}` : "", ordered ? " jkl-list--ordered" : "");

    const C = ordered ? "ol" : "ul";

    return <C className={componentClassName}>{children}</C>;
};
