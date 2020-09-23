import React, { createContext, useState, ReactNode, useContext } from "react";

interface FSMenuContextProps {
    menuIsOpen: string;
    setMenuIsOpen: React.Dispatch<React.SetStateAction<string>>;
}
const fullscreenMenuContext = createContext<FSMenuContextProps>({
    menuIsOpen: "",
    setMenuIsOpen: () => null,
});

export function useFullscreenMenu() {
    return useContext(fullscreenMenuContext);
}

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
