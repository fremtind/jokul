import React, { createContext, useState, ReactNode } from "react";

interface FSMenuContextProps {
    menuIsOpen: string;
    setMenuIsOpen: React.Dispatch<React.SetStateAction<string>>;
}
export const fullscreenMenuContext = createContext<FSMenuContextProps>({
    menuIsOpen: "",
    setMenuIsOpen: () => null,
});

interface Props {
    children: ReactNode;
}
export function FSMenuContextProvider({ children }: Props) {
    const [menuIsOpen, setMenuIsOpen] = useState("");
    return (
        <fullscreenMenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
            {children}
        </fullscreenMenuContext.Provider>
    );
}
