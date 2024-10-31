import type { WithChildren } from "@fremtind/jokul";
import React, { createContext, useContext, useState, type FC } from "react";

type ActiveHeaderContext = [
    string,
    React.Dispatch<React.SetStateAction<string>>,
];

const activeHeaderContext = createContext<ActiveHeaderContext>([
    "",
    () => {
        return;
    },
]);

export const useActiveHeader = (): ActiveHeaderContext =>
    useContext(activeHeaderContext);

export const ActiveHeaderContextProvider: FC<WithChildren> = ({ children }) => {
    const value = useState<string>("");

    return (
        <activeHeaderContext.Provider value={value}>
            {children}
        </activeHeaderContext.Provider>
    );
};
