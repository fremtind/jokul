import { type WithChildren } from '@fremtind/jkl-core';
import React, { type FC } from 'react';
import { createContext, useContext, useState } from 'react';

// TODO: åpen-state her, lukk ved klikk på lenke.
type NavigationMenuContext = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const navigationMenuContext = createContext<NavigationMenuContext>({
    open: false,
    setOpen: () => {
        return;
    },
});

export const useNavigationMenu = (): NavigationMenuContext =>
    useContext(navigationMenuContext);

export const NavigationMenuContextProvider: FC<WithChildren> = ({
    children,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <navigationMenuContext.Provider value={{ open, setOpen }}>
            {children}
        </navigationMenuContext.Provider>
    );
};
