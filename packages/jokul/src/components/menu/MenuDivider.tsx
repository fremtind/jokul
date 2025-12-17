import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";

export const MenuDivider: FC<HTMLAttributes<HTMLHRElement>> = (props) => {
    const { className, ...hrProps } = props;

    return <hr className={clsx("jkl-menu-divider", className)} {...hrProps} />;
};
