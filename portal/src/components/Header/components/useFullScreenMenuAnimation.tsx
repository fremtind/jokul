import { useEffect, useCallback, useContext } from "react";
import { useAnimation } from "framer-motion";
import { a11yContext } from "../../../contexts/a11yContext";

interface Props {
    isOpen: boolean;
}

export const useFullScreenMenuAnimaiton = ({ isOpen }: Props) => {
    const controls = useAnimation();
    const { prefersReducedMotion } = useContext(a11yContext);

    const exit = {
        opacity: 0,
        clipPath: prefersReducedMotion ? "" : "inset(0 -3ch 100% 0)",
        y: "100%",
        transition: { duration: 0 },
    };

    const initial = {
        opacity: 1,
        clipPath: prefersReducedMotion ? "" : "inset(0 -3ch 100% 0)",
        transition: { duration: 0.25, delay: 0.1 },
        y: "100%",
    };

    const animate = useCallback(
        (idx: number) => ({
            clipPath: prefersReducedMotion ? "" : "inset(0 -3ch 0% 0)",
            transition: { duration: 0.35, delay: prefersReducedMotion ? 0 : 0.03 * idx },
            y: 0,
        }),
        [],
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
