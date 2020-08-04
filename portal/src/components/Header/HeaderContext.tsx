import React, { createContext, useReducer, Dispatch } from "react";
import { hamburgerReducer, HamburgerActions } from "./HeaderReducers";

type InitialStateType = {
    isOpenBurger: boolean;
};

const initialState = {
    isOpenBurger: false,
};

const HeaderContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<HamburgerActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({ isOpenBurger }: InitialStateType, action: HamburgerActions) => ({
    isOpenBurger: hamburgerReducer(isOpenBurger, action),
});

const HeaderProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <HeaderContext.Provider value={{ state, dispatch }}>{children}</HeaderContext.Provider>;
};

export { HeaderProvider, HeaderContext };
