import React, { VFC, useContext, createContext } from "react";
import { useReducedMotion } from "../src";

interface State {
    prefersReducedMotion: boolean;
}

const ScreenContext = createContext<State>({
    prefersReducedMotion: false,
});

const ReducedMotionExample: VFC = () => {
    const { prefersReducedMotion } = useContext(ScreenContext);

    return (
        <p className="jkl-heading-3 jkl-spacing-xl--bottom">{`Din dings har redusert bevegelse ${
            prefersReducedMotion ? "PÅ" : "AV"
        }`}</p>
    );
};

const Provider: VFC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <ScreenContext.Provider value={{ prefersReducedMotion }}>
            <ReducedMotionExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
