import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

export const DividerLine = () => {
    const [spin, setSpin] = useState(false);
    const [id] = useState(uuid());

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

    const observer = new IntersectionObserver(checkVisibility, options) || { observe: () => setSpin(true) };

    useEffect(() => {
        const target = document.getElementById(id);

        if (target) {
            observer.observe(target);
        }
    }, []);

    return <hr id={id} className={`jkl-divider ${spin ? "jkl-divider--spin" : ""}`} />;
};
