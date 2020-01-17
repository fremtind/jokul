import React, { useState, useRef } from "react";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";

export const DividerLine = () => {
    const [spin, setSpin] = useState(typeof IntersectionObserver === "undefined");
    const ref = useRef(null);

    const checkVisibility = (entries: IntersectionObserverEntry[]) =>
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && spin !== entry.isIntersecting) {
                setSpin(true);
            }
        });

    const options = {
        rootMargin: "0px",
        threshold: 1.0,
    };

    const fallback = () => setSpin(true);

    useIntersectionObserver(ref, checkVisibility, fallback, options);

    return <hr ref={ref} className={`jkl-divider ${spin ? "jkl-divider--spin" : ""}`} />;
};
