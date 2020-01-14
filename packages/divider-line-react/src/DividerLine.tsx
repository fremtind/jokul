import React, { useState, useEffect, useRef } from "react";
import nanoid from "nanoid";

export const DividerLine = () => {
    const [spin, setSpin] = useState(typeof IntersectionObserver === "undefined");
    const [id] = useState(nanoid(16));

    const observerRef = useRef<IntersectionObserver>(null);

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

    useEffect(() => {
        if (typeof IntersectionObserver !== "undefined") {
            const target = document.getElementById(id);
            let observer = observerRef.current;

            if (observer) {
                observer.disconnect();
            }

            observer = new IntersectionObserver(checkVisibility, options);

            if (target) {
                observer.observe(target);
            }
        } else {
            setSpin(true);
        }
        return () => {
            if (typeof IntersectionObserver !== "undefined" && observerRef && observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return <hr id={id} className={`jkl-divider ${spin ? "jkl-divider--spin" : ""}`} />;
};
