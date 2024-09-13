import cn from "classnames";
import React, { type HTMLAttributes, type FC } from "react";

export const MenuDivider: FC<HTMLAttributes<HTMLHRElement>> = (props) => {
    const { className, ...hrProps } = props;

    return <hr className={cn("jkl-menu-divider", className)} {...hrProps} />;
};
