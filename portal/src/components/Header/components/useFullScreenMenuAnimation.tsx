import { useEffect, useCallback } from "react";
import { useAnimation } from "framer-motion";

interface Props {
    isOpen: boolean;
}

export const useFullScreenMenuAnimaiton = ({ isOpen }: Props) => {
    const controls = useAnimation();

    const exit = {
        opacity: 0,
        clipPath: "inset(0 -3ch 100% 0)",
        y: "100%",
        transition: { duration: 0 },
    };

    const initial = {
        opacity: 1,
        clipPath: "inset(0 -3ch 100% 0)",
        y: "100%",
        transition: { duration: 0.15, delay: 0.1 },
    };

    const animate = useCallback(
        (idx: number) => ({
            clipPath: "inset(0 -3ch 0% 0)",
            y: 0,
            transition: { duration: 0.3, delay: 0.025 * idx },
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
