import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    ordered?: boolean;
}

export const BulletList = ({ children, className = "jkl-p", ordered }: Props) => {
    const componentClassName = "jkl-list".concat(
        className ? ` ${className}` : "",
        ordered ? " jkl-list--ordered" : " jkl-list--bullet",
    );

    const C = ordered ? "ol" : "ul";

    return <C className={componentClassName}>{children}</C>;
};
