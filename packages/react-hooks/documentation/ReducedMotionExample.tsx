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
        <section className="hooks-example key-listener-example jkl-spacing--bottom-3">
            <h2 className="jkl-h2 jkl-spacing--bottom-2">{`Din dings har en redusert bevelgelse ${
                prefersReducedMotion ? "på" : "av"
            }`}</h2>
        </section>
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
