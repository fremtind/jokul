import { MouseEventHandler, PointerEventHandler, useCallback, useRef } from "react";

type Point = { x: number; y: number };

function getGesturePointFromEvent<T extends HTMLElement>(event: React.PointerEvent<T>): Point {
    return {
        x: event.clientX,
        y: event.clientY,
    };
}

type SwipeGestureOptions<T extends HTMLElement> = {
    onClick?: MouseEventHandler<T>;
    onSwipeLeft?: PointerEventHandler<T>;
    onSwipeRight?: PointerEventHandler<T>;
};

export function useSwipeGesture<T extends HTMLElement>(options: SwipeGestureOptions<T>) {
    const swipeHandled = useRef(false);
    const gestureStartPosition = useRef<Point>();

    const { onClick, onSwipeLeft, onSwipeRight } = options;

    const handleClick: MouseEventHandler<T> = useCallback(
        (event) => {
            if (!swipeHandled.current) {
                onClick?.(event);
            }
            swipeHandled.current = false; // sørg for at vi får klikke igjen etter swipes
        },
        [onClick],
    );

    const handleGestureStart: PointerEventHandler<T> = useCallback((event) => {
        event.preventDefault();

        (event.target as T).setPointerCapture?.(event.pointerId);
        gestureStartPosition.current = getGesturePointFromEvent(event);
        swipeHandled.current = false;
    }, []);

    const handleGestureMove: PointerEventHandler<T> = useCallback(
        (event) => {
            event.preventDefault();

            if (!gestureStartPosition.current) {
                return;
            }

            const disabled = (event.target as T).getAttribute("disabled") !== null;
            const { x: currentX } = getGesturePointFromEvent(event);
            const { x: startX } = gestureStartPosition.current;

            if (currentX - startX > 10 && onSwipeRight && !disabled) {
                onSwipeRight(event);
                swipeHandled.current = true;
                gestureStartPosition.current = getGesturePointFromEvent(event);
            } else if (startX - currentX > 10 && onSwipeLeft && !disabled) {
                onSwipeLeft(event);
                swipeHandled.current = true;
                gestureStartPosition.current = getGesturePointFromEvent(event);
            }
        },
        [onSwipeLeft, onSwipeRight],
    );

    const handleGestureEnd: PointerEventHandler<T> = useCallback((event) => {
        event.preventDefault();

        (event.target as T).releasePointerCapture?.(event.pointerId);
        gestureStartPosition.current = undefined;
    }, []);

    return {
        swipeHandled,
        gestureHandlers: {
            onClick: handleClick,
            onPointerDown: handleGestureStart,
            onPointerMove: handleGestureMove,
            onPointerUp: handleGestureEnd,
            onPointerCancel: handleGestureEnd,
        },
    };
}
