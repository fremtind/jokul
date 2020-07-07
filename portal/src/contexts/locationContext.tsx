import React, { createContext, useState, useContext, ReactNode, useEffect, useReducer } from "react";
import { withPrefix } from "gatsby";

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

export function useLocation() {
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
                currentPath: newPath,
                currentSection: newSection,
                isFrontPage: newPath === withPrefix("/"),
                sectionHasChanged: newSection !== state.currentSection,
            };
        default:
            return state;
    }
};

interface Props {
    children: ReactNode;
}

export function LocationContextProvider({ children }: Props) {
    const [gatsbyLocation, setLocation] = useState<GatsbyLocation>(window ? window.location : new Location());
    const initialState: LocationState = {
        currentPath: gatsbyLocation.pathname,
        currentSection: "",
        isFrontPage: gatsbyLocation.pathname === "/",
        sectionHasChanged: true,
    };
    const [locationState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "update", payload: { newLocation: gatsbyLocation } });
    }, [gatsbyLocation]);

    return <locationContext.Provider value={{ ...locationState, setLocation }}>{children}</locationContext.Provider>;
}
