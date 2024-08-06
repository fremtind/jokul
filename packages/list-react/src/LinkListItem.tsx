import cn from "classnames";
import React, { ComponentProps, FC } from "react";

export const LinkListItem: FC<ComponentProps<"li">> = ({ className, ...rest }) => {
    return <li className={cn("jkl-link-list-item", className)} {...rest}></li>;
};
