import classnames from "classnames";
import React, { FC } from "react";
import { Icon } from "../Icon";
import { IconProps } from "../types";
/*
 * NOTE: The green-check and red-cross icons also exists as a copy in the jkl-list package.
 *       If you're here to change them, consider changing them there as well, or
 *       finding a technical solution to sharing the SVG markup
 */
export const RedCrossIcon: FC<IconProps> = (props: IconProps) => {
    return (
        <Icon
            {...props}
            className={classnames("jkl-icon-red-cross", props.className)}
        >
            {"\ue5c9"}
        </Icon>
    );
};
RedCrossIcon.displayName = "RedCrossIcon";
