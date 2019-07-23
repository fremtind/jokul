import React, { useState, useEffect } from "react";
import nanoid from "nanoid";

export const DividerLine = () => {
    const [spin, setSpin] = useState(typeof IntersectionObserver === "undefined");
    const [id] = useState(nanoid(16));

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

    const observer = (typeof IntersectionObserver !== "undefined" &&
        new IntersectionObserver(checkVisibility, options)) || {
        observe: () => setSpin(true),
    };

    useEffect(() => {
        const target = document.getElementById(id);

        if (target) {
            observer.observe(target);
        }
    }, []);

    return <hr id={id} className={`jkl-divider ${spin ? "jkl-divider--spin" : ""}`} />;
};
