import { useCallback, useEffect, useRef, useState } from "react";
import { throttle } from "~/utils/function";

export const useHeadingHeight = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const headingRef = useRef<HTMLHeadingElement>(null);
    const [headingHeight, setHeadingHeight] = useState<{
        collapsed: number;
        expanded: number;
    } | null>(null);

    /**
     * Funksjon for å hente høyden til overskriften i enten kollapset eller
     * ekspandert tilstand, uten å endre utseende i nettleseren.
     */
    const readHeadingHeight = useCallback(
        (state: "expanded" | "collapsed" = "expanded") => {
            if (!headingRef.current) {
                return undefined;
            }

            const heading = headingRef.current;
            const wasAnimated = heading.dataset.animate;
            const wasCollapsed = heading.dataset.collapsed;

            heading.dataset.animate = "false";
            heading.dataset.collapsed =
                state === "collapsed" ? "true" : "false";
            const { height } = heading.getBoundingClientRect();
            if (typeof wasCollapsed !== "undefined") {
                heading.dataset.collapsed = wasCollapsed;
            } else {
                delete heading.dataset.collapsed;
            }

            // Sørg for å ikke skru på eventuell animasjon igjen før størrelsen er resatt
            requestAnimationFrame(() => {
                if (typeof wasAnimated !== "undefined") {
                    heading.dataset.animate = wasAnimated;
                } else {
                    delete heading.dataset.animate;
                }
            });

            return height;
        },
        [],
    );

    // Oppdater kollapset og ekspandert høyde for overskriften når vinduet endrer størrelse
    useEffect(() => {
        if (!hasMounted) {
            return;
        }

        const updateHeadingHeight = throttle(() => {
            const collapsed = readHeadingHeight("collapsed");
            const expanded = readHeadingHeight("expanded");

            if (
                typeof collapsed === "undefined" ||
                typeof expanded === "undefined"
            ) {
                setHeadingHeight(null);
                return;
            }

            setHeadingHeight({
                collapsed,
                expanded,
            });
        }, 50);

        updateHeadingHeight();

        if (typeof window !== "undefined") {
            window.addEventListener("resize", updateHeadingHeight);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", updateHeadingHeight);
            }
        };
    }, [readHeadingHeight, hasMounted]);

    return { headingRef, headingHeight };
};
