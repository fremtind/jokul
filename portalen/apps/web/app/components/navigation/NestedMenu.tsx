import { useAnimatedHeight, useId } from '@fremtind/jkl-react-hooks';
import { type SubMenu } from '@org/cms';
import { useLocation } from '@remix-run/react';
import React, { useState, type FC } from 'react';
import { NavigationMenuButton } from './NavigationMenuButton';
import { useNavigationMenu } from './navigationMenuContext';
import { NavigationMenuLink } from './NavigationMenuLink';

type NestedMenuProps = SubMenu & {
    parentPath?: string;
};

export const NestedMenu: FC<NestedMenuProps> = ({
    slug,
    title,
    items,
    parentPath,
}) => {
    const { pathname } = useLocation();
    const toggleMenu = () => setIsOpen((prevValue) => !prevValue);
    const menuId = useId('jkl-portal-nested-menu');

    const fullPath = [parentPath, slug].filter(Boolean).join('/');
    const hasActiveChild =
        pathname.startsWith(`/${fullPath}`) &&
        pathname.charAt(`/${fullPath}`.length) === '/';

    const { setOpen: setGlobalOpen } = useNavigationMenu();
    // Menyen starter åpen hvis du kommer rett til en underside i den
    const [isOpen, setIsOpen] = useState(hasActiveChild);
    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    if (!items) return null;

    const menuItems = items.map((item) => item.item);

    return (
        <>
            <NavigationMenuButton
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls={menuId}
                data-has-active-child={hasActiveChild}
                data-is-open={isOpen}
            >
                {title}
            </NavigationMenuButton>
            <div
                className="jkl-portal-navigation-menu jkl-portal-navigation-menu--nested"
                id={menuId}
                data-hidden={!isOpen}
                aria-hidden={!isOpen}
                ref={menuRef}
            >
                <ul>
                    {menuItems.map((item, index) => {
                        if (typeof item.value === 'string') {
                            return null;
                        }

                        if (item.relationTo === 'menu-items') {
                            const { link, title, slug } = item.value;

                            return (
                                <li key={index}>
                                    <NavigationMenuLink
                                        {...link}
                                        label={title}
                                        linkSlug={slug}
                                        tabIndex={isOpen ? 0 : -1}
                                        parentSlug={fullPath}
                                        onClick={() => setGlobalOpen(false)}
                                    />
                                </li>
                            );
                        }
                        if (item.relationTo === 'sub-menus') {
                            return (
                                <li key={index}>
                                    <NestedMenu
                                        {...item.value}
                                        parentPath={fullPath}
                                    />
                                </li>
                            );
                        }

                        return null;
                    })}
                </ul>
            </div>
        </>
    );
};
