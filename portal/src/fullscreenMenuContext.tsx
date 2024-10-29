import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useState, useContext, FC } from "react";

export type MenuItemList = Array<MenuItem>;

export type MenuItem = RootItem | LeafItem;

export interface LeafItem {
    linkText: string;
    content: string;
    basePath?: string;
}
export const isLeafItem = (item: MenuItem): item is LeafItem =>
    typeof item.content === "string";

export interface RootItem {
    linkText: string;
    content: MenuItemList;
    basePath?: string;
}
export const isRootItem = (item: MenuItem): item is RootItem =>
    typeof item.content !== "string";

interface FullScreenMenuContext {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    currentItem: RootItem | null;
    setCurrentItem: React.Dispatch<React.SetStateAction<RootItem | null>>;
    history: ReadonlyArray<RootItem>;
    pushHistory: (menuItem: RootItem) => void;
    popHistory: () => RootItem | undefined;
    peekHistory: () => RootItem | undefined;
}

const fullscreenMenuContext = createContext<FullScreenMenuContext>({
    isOpen: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsOpen(_) {
        return;
    },
    currentItem: null,
    setCurrentItem: () => null,
    history: [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pushHistory(_) {
        return;
    },
    popHistory() {
        return undefined;
    },
    peekHistory() {
        return undefined;
    },
});

export function useFullscreenMenuContext(): FullScreenMenuContext {
    return useContext(fullscreenMenuContext);
}

export const FSMenuContextProvider: FC<WithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<RootItem | null>(null);

    const [history, setHistory] = useState<RootItem[]>([]);
    const pushHistory = (menuItem: RootItem) => {
        history.push(menuItem);
        setHistory(history);
    };
    const popHistory = () => {
        const menuItem = history.pop();
        setHistory(history);
        return menuItem;
    };
    const peekHistory = () => {
        if (history.length === 0) {
            return undefined;
        }
        return history[history.length - 1];
    };

    return (
        <fullscreenMenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                currentItem,
                setCurrentItem,
                history,
                popHistory,
                peekHistory,
                pushHistory,
            }}
        >
            {children}
        </fullscreenMenuContext.Provider>
    );
};
