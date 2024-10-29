import cn from "classnames";
import React, { type HTMLAttributes, type FC } from "react";

export const ContextualMenuDivider: FC<HTMLAttributes<HTMLHRElement>> = (
    props,
) => {
    const { className, ...hrProps } = props;

    return (
        <hr
            className={cn("jkl-contextual-menu-divider", className)}
            {...hrProps}
        />
    );
};
