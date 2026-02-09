import clsx from "clsx";
import React, { type HTMLAttributes } from "react";

export const MenuDivider = React.forwardRef<
    HTMLHRElement,
    HTMLAttributes<HTMLHRElement>
>(function MenuDivider(props, ref) {
    const { className, ...hrProps } = props;

    return (
        <hr
            ref={ref}
            className={clsx("jkl-menu-divider", className)}
            {...hrProps}
        />
    );
});
