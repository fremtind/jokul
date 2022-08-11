import { WithOptionalChildren } from "@fremtind/jkl-core";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useState, useRef, ReactNode, useContext, useEffect } from "react";
import { a11yContext } from "../../../a11yContext";

import "./MediaBox.scss";

interface Props extends WithOptionalChildren {
    media: ReactNode;
    rightAlign?: boolean;
    caption?: string;
}

const MediaBox: React.FC<Props> = ({ media, rightAlign, caption, children }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const [elementTop, setElementTop] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        const element = ref.current;
        if (element) {
            setElementTop(element.offsetTop);
        }
    }, [ref]);

    useIntersectionObserver(
        mediaRef,
        (entires: IntersectionObserverEntry[]) => setIsInViewport(entires.some((entry) => entry.isIntersecting)),
        () => undefined,
        {
            rootMargin: "-175px 0px",
            threshold: [0.0, 1.0],
        },
    );

    const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -0.3], {
        clamp: false,
    });
    const isLongText = (children?.toString() || "").length > 90;

    return (
        <div ref={ref} className={`jkl-portal-media-box ${rightAlign ? "jkl-portal-media-box--right" : ""}`}>
            <motion.figure
                ref={mediaRef}
                className={`jkl-portal-media-box__media ${isInViewport ? "jkl-portal-media-box__media--in-view" : ""}`}
            >
                {media}
                {caption && <figcaption className="jkl-micro jkl-portal-media-box__caption">{caption}</figcaption>}
            </motion.figure>
            <motion.div
                style={{ y: prefersReducedMotion ? 0 : y }}
                className={`jkl-portal-media-box__card ${isLongText ? "jkl-portal-media-box__card--long-text" : ""}`}
            >
                <p className={isLongText ? "jkl-body" : "jkl-heading-2"}>{children}</p>
            </motion.div>
        </div>
    );
};

export default MediaBox;
