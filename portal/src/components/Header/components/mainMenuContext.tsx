import { createContext, useContext } from "react";

export type NavigationFunction = (path: string) => void;
export type IsActiveFunction = (path: string) => boolean;
interface MainMenuContextProps {
    navigationFunction: NavigationFunction;
    isActiveFunction: IsActiveFunction;
}

export const defaultNavigationFunction = (path: string) => {
    window && window.location.assign(path);
};

export const mainMenuContext = createContext<MainMenuContextProps>({
    navigationFunction: defaultNavigationFunction,
    isActiveFunction: () => false,
});

export function useMainMenu() {
    return useContext(mainMenuContext);
}
