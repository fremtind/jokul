import type { MainMenu, MenuItem } from '@org/cms';
import { isMenuLink, type Link, isSubMenu } from './types';

export const getUrlFromLink = (link: Link, mainMenu: MainMenu) => {
    const { type, reference, url } = link;

    if (type === 'custom') {
        return url;
    } else if (type === 'reference') {
        const id =
            typeof reference?.value === 'string'
                ? reference.value
                : reference?.value.id;

        return getPagePathFromId(mainMenu, id);
    } else {
        return '#';
    }
};

export const getReferenceId = (reference: Link['reference']) =>
    typeof reference?.value === 'string'
        ? reference.value
        : reference?.value.id;

export const getLinkId = (link: Link) => {
    if (link.type === 'reference') {
        return getReferenceId(link.reference);
    }
};

export const getPageFromPath = (mainMenu: MainMenu, pathname?: string) => {
    if (!mainMenu.items) return undefined;

    if (!pathname || pathname === '/') {
        pathname = 'home';
    }
    const [rootSlug, drawerSlug, expandableSlug] = pathname.split('/');

    for (const { item } of mainMenu.items) {
        if (typeof item.value === 'string') continue;

        const { slug } = item.value;
        if (slug === rootSlug && !drawerSlug) {
            if (
                item.relationTo === 'menu-items' &&
                item.value.link?.type === 'reference'
            ) {
                const reference = item.value.link.reference;

                if (reference && 'value' in reference) {
                    const { relationTo, value } = reference;

                    return {
                        collection: relationTo,
                        id: typeof value === 'string' ? value : value.id,
                    };
                }
            }
        } else if (slug === rootSlug && item.relationTo === 'sub-menus') {
            if (!item.value.items) continue;

            for (const { item: drawerItem } of item.value.items) {
                if (typeof drawerItem.value === 'string') continue;

                const { slug } = drawerItem.value;
                if (slug === drawerSlug && !expandableSlug) {
                    if (
                        drawerItem.relationTo === 'menu-items' &&
                        drawerItem.value.link?.type === 'reference'
                    ) {
                        const reference = drawerItem.value.link.reference;

                        if (reference && 'value' in reference) {
                            const { relationTo, value } = reference;

                            return {
                                collection: relationTo,
                                id:
                                    typeof value === 'string'
                                        ? value
                                        : value.id,
                            };
                        }
                    }
                } else if (
                    slug === drawerSlug &&
                    drawerItem.relationTo === 'sub-menus'
                ) {
                    if (!drawerItem.value.items) continue;

                    for (const { item: expandableItem } of drawerItem.value
                        .items) {
                        if (typeof expandableItem.value === 'string') continue;

                        const { slug } = expandableItem.value;
                        if (slug === expandableSlug) {
                            if (
                                expandableItem.relationTo === 'menu-items' &&
                                expandableItem.value.link?.type === 'reference'
                            ) {
                                const reference =
                                    expandableItem.value.link.reference;

                                if (reference && 'value' in reference) {
                                    const { relationTo, value } = reference;

                                    return {
                                        collection: relationTo,
                                        id:
                                            typeof value === 'string'
                                                ? value
                                                : value.id,
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const itemIsMatchingLink = (item: MenuItem, pageId: string) =>
    item.link?.type === 'reference' && item.link.reference?.value === pageId;

export const getPagePathFromId = (mainMenu: MainMenu, pageId?: string) => {
    if (!pageId || !mainMenu.items) return undefined;

    for (const { item } of mainMenu.items) {
        if (typeof item.value === 'string') continue;
        const rootSlug = item.value.slug;

        if (isMenuLink(item.value) && itemIsMatchingLink(item.value, pageId)) {
            return `/${rootSlug}`;
        }

        if (isSubMenu(item.value) && item.value.items) {
            for (const { item: drawerItem } of item.value.items) {
                if (typeof drawerItem.value === 'string') continue;
                const drawerSlug = drawerItem.value.slug;

                if (
                    isMenuLink(drawerItem.value) &&
                    itemIsMatchingLink(drawerItem.value, pageId)
                ) {
                    return `/${rootSlug}/${drawerSlug}`;
                }

                if (isSubMenu(drawerItem.value) && drawerItem.value.items) {
                    for (const { item: expandableItem } of drawerItem.value
                        .items) {
                        if (typeof expandableItem.value === 'string') continue;
                        const expandableSlug = expandableItem.value.slug;

                        if (
                            isMenuLink(expandableItem.value) &&
                            itemIsMatchingLink(expandableItem.value, pageId)
                        ) {
                            return `/${rootSlug}/${drawerSlug}/${expandableSlug}`;
                        }
                    }
                }
            }
        }
    }
};
