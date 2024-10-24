import { type WithChildren } from '@fremtind/jkl-core';
import { useIntersectionObserver } from '@fremtind/jkl-react-hooks';
import cn from 'classnames';
import React, {
    type FC,
    useRef,
    useEffect,
    useState,
    useCallback,
} from 'react';

interface ScrollContentProps extends WithChildren {
    /**
     * Kalles når en trigger kommer inn i trigger-området
     */
    onStepChange?: (step: number) => void;
    /**
     * Kalles når brukeren scroller forbi eksemplet (i begge retninger)
     * F.eks. når brukeren scroller opp og første trigger forlater bunnen
     * av trigger-området
     */
    onLastStepLeave?: () => void;
    className?: string;
}

const intersectOptions = { rootMargin: '-40% -5%' };
const fallbackFunction = () => {};

/**
 * Sjekker om elementet som utløser en IntersectionEvent er på vei ut
 * av trigger-området
 *
 * @param direction Retningen du vil sjekke om elementet beveger seg ut av
 * @param intersection en IntersectionEvent
 * @returns Om elementet er på vei ut av trigger-området
 */
function isLeaving(
    direction: 'top' | 'bottom',
    intersection: IntersectionObserverEntry
) {
    const { boundingClientRect, rootBounds, isIntersecting } = intersection;

    if (!rootBounds) {
        return false;
    }

    const isLeaving =
        direction === 'top'
            ? boundingClientRect.bottom < rootBounds.top
            : boundingClientRect.top > rootBounds.bottom;

    return !isIntersecting && isLeaving;
}

export const ScrollContent: FC<ScrollContentProps> = ({
    children,
    className,
    onStepChange,
    onLastStepLeave,
}) => {
    const dummyElement = useRef<HTMLDivElement>(null);
    const [stepTriggers, setStepTriggers] = useState<NodeListOf<HTMLElement>>();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            // Finn alle elementer som skal trigge stegendringer
            setStepTriggers(
                document.querySelectorAll<HTMLElement>('[data-triggered-step]')
            );
        }
    }, []);

    const handleIntersections: IntersectionObserverCallback = useCallback(
        (intersections) => {
            intersections.forEach((intersection) => {
                const isFirstItem =
                    intersection.target === stepTriggers?.item(0);
                const isLastItem =
                    intersection.target ===
                    stepTriggers?.item(stepTriggers?.length - 1);

                if (intersection.isIntersecting) {
                    const triggeredStep = Number(
                        (intersection.target as HTMLElement).dataset
                            .triggeredStep
                    );
                    onStepChange?.(triggeredStep);
                } else if (
                    (isLastItem && isLeaving('top', intersection)) ||
                    (isFirstItem && isLeaving('bottom', intersection))
                ) {
                    onLastStepLeave?.();
                }
            });
        },
        [onStepChange, onLastStepLeave, stepTriggers]
    );

    useIntersectionObserver(
        stepTriggers || dummyElement,
        handleIntersections,
        fallbackFunction,
        intersectOptions
    );

    return (
        <div className={cn('jkl-portal-scroll-content', className)}>
            <div
                ref={dummyElement}
                style={{
                    position: 'absolute',
                    top: '-10000px',
                    width: '0',
                    height: '0',
                }}
                aria-hidden
            />
            {children}
        </div>
    );
};
