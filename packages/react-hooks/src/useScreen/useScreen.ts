import { useEffect, useReducer } from "react";
import { reducer, initialState, init, actionTypes, State } from "./state";

export const useScreen = (): State => {
    const [device, deviceDispatch] = useReducer(reducer, initialState, init);

    const handleScreenChange = () =>
        requestAnimationFrame(() =>
            deviceDispatch({ type: actionTypes.resized, width: window.innerWidth, height: window.innerHeight }),
        );

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleScreenChange);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleScreenChange);
            }
        };
    }, []);

    return { ...device };
};
