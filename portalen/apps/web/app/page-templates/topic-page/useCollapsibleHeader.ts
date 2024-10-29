import { useCallback, useEffect, useRef } from "react";

export const useCollapsibleHeader = (setCollapsed: (collapsed: boolean) => void): void => {
    const lastKnownScrollPosition = useRef(0);
    const ticking = useRef(false);
    const animating = useRef(false);
    const animationDuration = 250 + 10; // expressive + buffer
    const scrollTriggerUp = 24;
    const scrollTriggerDown = 100;

    const checkIfTriggered = useCallback(
        (scrollPosition: number, direction: "up" | "down") => {
            if (animating.current) return;
            if (direction === "up" && scrollPosition > scrollTriggerUp) {
                animating.current = true;
                setCollapsed(true);
                setTimeout(() => {
                    animating.current = false;
                }, animationDuration);
            } else if (direction === "down" && scrollPosition < scrollTriggerDown) {
                animating.current = true;
                setCollapsed(false);
                setTimeout(() => {
                    animating.current = false;
                }, animationDuration);
            }
        },
        [animationDuration, scrollTriggerUp, scrollTriggerDown, setCollapsed],
    );

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === "undefined") return;

            const { scrollY } = window;
            const direction = scrollY > lastKnownScrollPosition.current ? "up" : "down";
            lastKnownScrollPosition.current = scrollY;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    checkIfTriggered(lastKnownScrollPosition.current, direction);
                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        if (typeof window !== "undefined") {
            lastKnownScrollPosition.current = scrollY;
            checkIfTriggered(lastKnownScrollPosition.current, "up");
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [checkIfTriggered]);
};
