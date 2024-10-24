import { ChevronRightIcon } from '@fremtind/jkl-icons-react';
import { NavLink } from '@remix-run/react';
import cn from 'classnames';
import React, { type FC, type HTMLAttributes } from 'react';
import { useNavigationMenu } from './navigationMenuContext';

export interface NavigationMenuButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    linkTo?: string;
}

export const NavigationMenuButton: FC<NavigationMenuButtonProps> = (props) => {
    const { className, children, linkTo, style, ...buttonProps } = props;
    const { open, setOpen } = useNavigationMenu();
    return linkTo ? (
        <NavLink
            {...buttonProps}
            tabIndex={open ? 0 : -1}
            className={cn('jkl-portal-navigation-menu-item', className)}
            to={linkTo}
            onClick={() => setOpen(false)}
            state={{
                isCollapsed: false,
            }}
            end
        >
            {
                children as any /* Mismatch i versjon av @types/react med Remix? */
            }
        </NavLink>
    ) : (
        <button
            {...buttonProps}
            style={style}
            className={cn('jkl-portal-navigation-menu-item', className)}
        >
            {children}
            <ChevronRightIcon className="jkl-portal-navigation-menu-item__icon" />
        </button>
    );
};
