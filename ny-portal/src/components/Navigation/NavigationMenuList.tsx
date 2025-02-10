import { FC } from "react";

type NavigationMenuListProps = {
    children: React.ReactNode;
};

export const NavigationMenuList: FC<NavigationMenuListProps> = ({
    children,
}) => {
    return <ul>{children}</ul>;
};
