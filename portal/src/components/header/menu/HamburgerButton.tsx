"use client";

import { Button } from "@fremtind/jokul/button";
import { Icon } from "@fremtind/jokul/icon";

type Props = {
    expanded: boolean;
};

export const HamburgerButton = ({ expanded, ...props }: Props) => {
    const menuId = "global-menu";

    return (
        <Button
            {...props}
            aria-controls={menuId}
            id={`${menuId}-button`}
            variant="ghost"
            icon={expanded ? <Icon>Close</Icon> : <Icon>Menu</Icon>}
        />
    );
};
