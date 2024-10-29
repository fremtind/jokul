import React, { type FC } from "react";
import { ActiveHeaderContextProvider } from "./activeHeaderContext";
import { TableOfContentsWrapper } from "./components";
import { TableOfContentsContextProvider } from "./tableOfContentsContext";

export const TableOfContents: FC = () => {
    return (
        <TableOfContentsContextProvider>
            <ActiveHeaderContextProvider>
                <TableOfContentsWrapper />
            </ActiveHeaderContextProvider>
        </TableOfContentsContextProvider>
    );
};
