import React, { createContext, useState, useContext, ReactNode } from "react";
import { withPrefix } from "gatsby";

type GatsbyLocation = Location & { state?: Record<string, string> };
interface LocationContext {
    currentPath: string;
    currentSection: string;
    previousSection?: string;
    setLocation: (location: GatsbyLocation) => void;
}

export const locationContext = createContext<LocationContext>({
    currentPath: "",
    currentSection: "",
    setLocation: () => null,
});

export function useLocation() {
    const temp = useContext(locationContext);
    return { ...temp };
}

interface Props {
    children: ReactNode;
}
export function LocationContextProvider({ children }: Props) {
    const [gatsbyLocation, setLocation] = useState<GatsbyLocation>(window ? window.location : new Location());
    const currentPath = gatsbyLocation.pathname;
    const currentSection = gatsbyLocation.pathname.substr(withPrefix("").length).split("/")[0];
    const previousSection = gatsbyLocation.state && gatsbyLocation.state?.lastPath;

    return (
        <locationContext.Provider value={{ currentPath, currentSection, previousSection, setLocation }}>
            {children}
        </locationContext.Provider>
    );
}
