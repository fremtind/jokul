import type { AllContent, SubMenu, MenuItem } from '@org/cms';

type LinkBlock = AllContent['blocks'][number] & {
    blockType: 'link';
};
export type Link = LinkBlock['link'];

export function isMenuLink(item: SubMenu | MenuItem): item is MenuItem {
    return (item as MenuItem).link !== undefined;
}
export function isSubMenu(item: SubMenu | MenuItem): item is SubMenu {
    return (item as MenuItem).link === undefined;
}
