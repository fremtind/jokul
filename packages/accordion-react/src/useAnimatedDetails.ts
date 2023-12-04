import { useEffect, useRef, useState } from "react";

export const useAnimatedDetails = ({
    onOpenChange,
    startExpanded,
}: {
    onOpenChange: (open: boolean, e: React.MouseEvent<HTMLElement>) => void;
    startExpanded: boolean;
}) => {
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const summaryRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animation = useRef<Animation | null>(null);

    const [isClosing, setIsClosing] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.open = startExpanded;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onAnimationFinish = (open: boolean) => {
        if (detailsRef.current && summaryRef.current) {
            detailsRef.current.open = open;
            animation.current = null;
            setIsClosing(false);
            setIsExpanding(false);
            detailsRef.current.style.overflow = "";
            detailsRef.current.style.height = "";
        }
    };

    const open = (e: React.MouseEvent<HTMLElement>) => {
        if (detailsRef.current && summaryRef.current) {
            detailsRef.current.style.height = `${detailsRef.current.offsetHeight}px`;
            detailsRef.current.open = true;
            requestAnimationFrame(() => {
                if (detailsRef.current && summaryRef.current && contentRef.current) {
                    setIsExpanding(true);
                    onOpenChange(true, e);
                    const startHeight = detailsRef.current.offsetHeight;
                    const endHeight = summaryRef.current.offsetHeight + contentRef.current.offsetHeight;

                    if (animation.current) {
                        animation.current.cancel();
                    }

                    if (detailsRef.current.animate) {
                        animation.current = detailsRef.current.animate(
                            {
                                height: [`${startHeight}px`, `${endHeight}px`],
                            },
                            {
                                duration: 150,
                                easing: "ease",
                            },
                        );
                        animation.current.onfinish = () => onAnimationFinish(true);
                        animation.current.oncancel = () => setIsExpanding(false);
                    }
                }
            });
        }
    };

    const close = (e: React.MouseEvent<HTMLElement>) => {
        if (detailsRef.current && summaryRef.current) {
            setIsClosing(true);
            onOpenChange(false, e);
            const startHeight = detailsRef.current.offsetHeight;
            const endHeight = summaryRef.current.offsetHeight;
            if (animation.current) {
                animation.current.cancel();
            }

            if (detailsRef.current.animate) {
                animation.current = detailsRef.current.animate(
                    {
                        height: [`${startHeight}px`, `${endHeight}px`],
                    },
                    {
                        duration: 150,
                        easing: "ease",
                    },
                );
                animation.current.onfinish = () => onAnimationFinish(false);
                animation.current.oncancel = () => setIsClosing(false);
            }
        }
    };

    const onSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (detailsRef.current && summaryRef.current) {
            detailsRef.current.style.overflow = "hidden";
            if (isClosing || !detailsRef.current.open) {
                open(e);
            } else if (isExpanding || detailsRef.current.open) {
                close(e);
            }
        }
    };

    return { detailsRef, summaryRef, contentRef, onSummaryClick };
};
