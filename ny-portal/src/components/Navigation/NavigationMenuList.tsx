"use client";

import { FC, useId } from "react";

type NavigationMenuListProps = {
    children: React.ReactNode;
};

export const NavigationMenuList: FC<NavigationMenuListProps> = ({
    children,
}) => {
    const navId = useId();

    return <ul id={navId}>{children}</ul>;
};
