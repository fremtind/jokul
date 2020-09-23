export type MenuItemList = Array<MenuItem>;

export type MenuItem = RootItem | LeafItem;

export interface LeafItem {
    linkText: string;
    content: string;
    basePath?: string;
}
export const isLeafItem = (item: MenuItem): item is LeafItem => typeof item.content === "string";

export interface RootItem {
    linkText: string;
    content: MenuItemList;
    basePath?: string;
}
export const isRootItem = (item: MenuItem): item is RootItem => typeof item.content !== "string";
