import React, { FC, useRef, useState } from "react";
import { useIntersectionObserver } from "../src/useIntersectionObserver/useIntersectionObserver";
import "./index.scss";

const IntersectionObserverExample: FC = () => {
    const [isInViewport, setIsInViewport] = useState(false);
    const targetRef = useRef(null);

    const onIntersect = (entires: IntersectionObserverEntry[]) => {
        setIsInViewport(entires.some((entry) => entry.isIntersecting));
    };
    const fallback = () => console.log("IntersectionObserver not supported");
    const options = { rootMargin: "0px", threshold: [0.0, 1.0] };

    useIntersectionObserver(targetRef, onIntersect, fallback, options);

    return (
        <div className="jkl jkl-intersection-example" data-theme={isInViewport ? "dark" : "light"}>
            <p className="jkl-body jkl-spacing-xl--all" style={{ height: "100vh" }}>
                Scroll for å endre farge
            </p>
            <p className="jkl-body jkl-spacing-xl--all" ref={targetRef}>
                Scroll tilbake for å endre fargen tilbake
            </p>
        </div>
    );
};

export default IntersectionObserverExample;
