import { useEffect, useCallback, useMemo } from "react";
import { useAnimation } from "framer-motion";
import { useMainMenu } from "./contexts/mainMenuContext";

interface Props {
    isOpen: boolean;
}

export const useFullScreenMenuAnimation = ({ isOpen }: Props) => {
    const controls = useAnimation();
    const { reduceMotion } = useMainMenu();

    const exit = useMemo(
        () => ({
            opacity: 0,
            clipPath: reduceMotion ? "" : "inset(0 -3ch 100% 0)",
            y: "100%",
            transition: { duration: 0 },
        }),
        [reduceMotion],
    );

    const initial = useMemo(
        () => ({
            opacity: 1,
            clipPath: reduceMotion ? "" : "inset(0 -3ch 100% 0)",
            transition: { duration: 0.25, delay: 0.1 },
            y: reduceMotion ? 0 : "100%",
        }),
        [reduceMotion],
    );

    const animate = useCallback(
        (idx: number) => ({
            clipPath: reduceMotion ? "" : "inset(0 -3ch 0% 0)",
            transition: { duration: 0.35, delay: reduceMotion ? 0 : 0.03 * idx },
            y: 0,
        }),
        [reduceMotion],
    );

    // Initial animation on menu open/close
    useEffect(() => {
        (async () => {
            await controls.start(exit);
            await controls.start(initial);
            await controls.start(animate);
        })();
    }, [controls, isOpen, exit, initial, animate]);

    return [controls];
};
