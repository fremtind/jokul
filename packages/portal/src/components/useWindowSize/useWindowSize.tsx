import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WindowSizeContextType {
    width: number;
    height: number;
}

const WindowSizeContext = createContext<WindowSizeContextType>({ width: 0, height: 0 });

interface WindowSizeProviderProps {
    children: ReactNode;
}

const WindowSizeProvider = ({ children }: WindowSizeProviderProps) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return <WindowSizeContext.Provider value={dimensions}>{children}</WindowSizeContext.Provider>;
};

export default WindowSizeProvider;
export const useWindowSize = () => useContext(WindowSizeContext);
