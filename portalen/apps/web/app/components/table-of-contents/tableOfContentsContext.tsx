import type { WithChildren } from '@fremtind/jkl-core';
import React, { createContext, useContext, useState, type FC } from 'react';

export type TableOfContentsEntry = {
    level: number;
    element: HTMLHeadingElement;
    children: TableOfContentsEntry[];
};

export type TableOfContentRootEntry = {
    children: TableOfContentsEntry[];
};

type TableOfContentsContext = [
    TableOfContentRootEntry,
    React.Dispatch<React.SetStateAction<TableOfContentRootEntry>>
];

const tableOfContentsContext = createContext<TableOfContentsContext>([
    {
        children: [],
    },
    () => {
        return;
    },
]);

export const useTableOfContents = (): TableOfContentsContext =>
    useContext(tableOfContentsContext);

export const TableOfContentsContextProvider: FC<WithChildren> = ({
    children,
}) => {
    const value = useState<TableOfContentRootEntry>({
        children: [],
    });

    return (
        <tableOfContentsContext.Provider value={value}>
            {children}
        </tableOfContentsContext.Provider>
    );
};
