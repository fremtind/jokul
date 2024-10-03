import clsx from "clsx";
import React, { type HTMLAttributes, type FC } from "react";

export const MenuDivider: FC<HTMLAttributes<HTMLHRElement>> = (props) => {
    const { className, ...hrProps } = props;

    return <hr className={clsx("jkl-menu-divider", className)} {...hrProps} />;
};
