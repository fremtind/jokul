import React, { useContext } from "react";
import { useReducedMotion } from "../src";

interface State {
    prefersReducedMotion: boolean;
}

const ScreenContext = React.createContext<State>({
    prefersReducedMotion: false,
});

const ReducedMotionExample = () => {
    const { prefersReducedMotion } = useContext(ScreenContext);

    return (
        <p className="jkl-heading-3 jkl-spacing--bottom-2">{`Din dings har redusert bevegelse ${
            prefersReducedMotion ? "PÅ" : "AV"
        }`}</p>
    );
};

const Provider = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <ScreenContext.Provider value={{ prefersReducedMotion }}>
            <ReducedMotionExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
