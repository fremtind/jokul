import { createContext, useContext } from "react";

export type NavigationFunction = (path: string) => void;
export type IsActiveFunction = (path: string, currentOpenMenu: string) => boolean;
interface MainMenuContextProps {
    navigationFunction: NavigationFunction;
    isActiveFunction: IsActiveFunction;
    reduceMotion: boolean;
}

let warningHasBeenShown = false;

export const defaultNavigationFunction = (path: string) => {
    if (typeof window !== "undefined" && window.location) {
        window.location.assign(path);
    } else if (process.env.NODE_ENV !== "production" && !warningHasBeenShown) {
        console.warn(
            "No window object found. Please supply your own navigationFunction to the MainMenu component for SSR solutions",
        );
        warningHasBeenShown = true;
    }
};
export const defaultIsActiveFunction = (path: string, currentOpenMenu: string) => {
    const hasWindowObject = typeof window !== "undefined" && window.location;
    const thisMenuIsOpen = path !== "" && currentOpenMenu.includes(path);
    const noMenuIsOpen = currentOpenMenu === "";
    const itemPathMatches = hasWindowObject ? window.location.pathname.includes(path) : false;

    if (thisMenuIsOpen) {
        return true;
    } else if (itemPathMatches && (thisMenuIsOpen || noMenuIsOpen)) {
        return true;
    } else {
        return false;
    }
};

export const mainMenuContext = createContext<MainMenuContextProps>({
    navigationFunction: defaultNavigationFunction,
    isActiveFunction: defaultIsActiveFunction,
    reduceMotion: false,
});

export function useMainMenu() {
    return useContext(mainMenuContext);
}
