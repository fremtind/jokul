import cn from "classnames";
import Link from "next/link";
import { useCallback, type FC, type HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";
import { useNavigationMenu } from "./NavigationMenuContext";

type NavigationMenuLinkProps = HTMLAttributes<HTMLAnchorElement> & {
    label: string;
    path: string;
    parentPath?: string;
};

export const NavigationMenuLink: FC<NavigationMenuLinkProps> = ({
    className,
    path,
    parentPath,
    label,
    onClick,
    ...restProps
}) => {
    const { setOpen } = useNavigationMenu();

    const href = `/${parentPath}/${path}`;

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            setOpen(false);
            onClick?.(e);
        },
        [onClick, setOpen],
    );

    return (
        <Link
            href={href}
            className={cn(styles["navigation-menu-item"], className)}
            onClick={handleClick}
            {...restProps}
        >
            {label}
        </Link>
    );
};
