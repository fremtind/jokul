import { WithChildren } from "@fremtind/jkl-core";
import { withPrefix } from "gatsby";
import React, { createContext, useState, useContext, useEffect, useReducer, FC } from "react";

type GatsbyLocation = Location & { state?: Record<string, string> };
interface LocationContext {
    currentPath: string;
    currentSection: string;
    sectionHasChanged?: boolean;
    isFrontPage?: boolean;
    setLocation: (location: GatsbyLocation) => void;
}

const locationContext = createContext<LocationContext>({
    currentPath: "",
    currentSection: "",
    setLocation: () => null,
});

export function useLocation(): LocationContext {
    return useContext(locationContext);
}

interface LocationState {
    currentPath: string;
    currentSection: string;
    isFrontPage: boolean;
    sectionHasChanged: boolean;
}

interface LocationAction {
    type: "update";
    payload: {
        newLocation: GatsbyLocation;
    };
}

const reducer = (state: LocationState, action: LocationAction): LocationState => {
    const { type, payload } = action;
    switch (type) {
        case "update":
            const newPath = payload.newLocation.pathname;
            const newSection = payload.newLocation.pathname.substr(withPrefix("/").length).split("/")[0];
            return {
                ...state,
                currentPath: newPath,
                currentSection: newSection,
                isFrontPage: newPath === withPrefix("/"),
                sectionHasChanged: newSection !== state.currentSection,
            };
        default:
            return state;
    }
};

export const LocationContextProvider: FC<WithChildren> = ({ children }) => {
    const [gatsbyLocation, setLocation] = useState<GatsbyLocation | null>(
        typeof window !== "undefined" ? window.location : null,
    );

    const initialState: LocationState = {
        currentPath: gatsbyLocation?.pathname || "/",
        currentSection: "",
        isFrontPage: gatsbyLocation?.pathname === "/",
        sectionHasChanged: true,
    };
    const [locationState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (gatsbyLocation) {
            dispatch({ type: "update", payload: { newLocation: gatsbyLocation } });
        }
    }, [gatsbyLocation]);

    return <locationContext.Provider value={{ ...locationState, setLocation }}>{children}</locationContext.Provider>;
};
