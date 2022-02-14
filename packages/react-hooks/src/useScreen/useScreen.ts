import { useEffect, useReducer } from "react";
import { breakpoints } from "@fremtind/jkl-core";
import { addMediaQueryListener, getInitialMediaQueryMatch } from "../mediaQueryUtils";
import { ActionType, reducer, ScreenState } from "./state";

const MEDIA_RULES: Record<keyof ScreenState, string> = {
    isSmallDevice: `(max-width: ${breakpoints.medium - 1}px)`,
    isMediumDevice: `(min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.large - 1}px)`,
    isLargeDevice: `(min-width: ${breakpoints.large}px) and (max-width: ${breakpoints.xl - 1}px)`,
    isXlDevice: `(min-width: ${breakpoints.xl}px)`,
    isPortrait: "(orientation: portrait)",
    isLandscape: "(orientation: landscape)",
};

export const useScreen = (): ScreenState => {
    const initialState: ScreenState = Object.fromEntries(
        Object.entries(MEDIA_RULES).map(([key, rule]) => [key, getInitialMediaQueryMatch(rule)]),
    ) as unknown as ScreenState;

    const [device, deviceDispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            Object.entries(MEDIA_RULES).forEach(([key, rule]) => {
                if (key === "isPortrait" || key === "isLandscape") {
                    addMediaQueryListener(
                        window.matchMedia(rule),
                        (e) => e.matches && deviceDispatch({ type: ActionType.orientation, property: key }),
                    );
                } else {
                    addMediaQueryListener(
                        window.matchMedia(rule),
                        (e) =>
                            e.matches &&
                            deviceDispatch({ type: ActionType.deviceSize, property: key as keyof ScreenState }),
                    );
                }
            });
        }
    }, []);

    return { ...device };
};
