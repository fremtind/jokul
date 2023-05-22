import { type MouseEventHandler, type PointerEventHandler, type MutableRefObject, useCallback, useRef } from "react";
import { type ToggleChangeHandler } from "./ToggleSwitch";

type Point = { x: number; y: number };

function getGesturePointFromEvent<T extends HTMLElement>(event: React.PointerEvent<T>): Point {
    return {
        x: event.clientX,
        y: event.clientY,
    };
}

type SwipeGestureOptions<T extends HTMLElement> = {
    onClick?: MouseEventHandler<T>;
    onChange?: ToggleChangeHandler<T>;
    onPointerDown?: PointerEventHandler<T>;
    onPointerUp?: PointerEventHandler<T>;
    onPointerMove?: PointerEventHandler<T>;
    onPointerCancel?: PointerEventHandler<T>;
};

export function useSwipeGesture<T extends HTMLElement>(
    options: SwipeGestureOptions<T>,
): {
    swipeHandled: MutableRefObject<"on" | "off" | false>;
    gestureHandlers: {
        onClick: MouseEventHandler<T>;
        onPointerDown: PointerEventHandler<T>;
        onPointerMove: PointerEventHandler<T>;
        onPointerUp: PointerEventHandler<T>;
        onPointerCancel: PointerEventHandler<T>;
    };
} {
    const swipeHandled = useRef<"on" | "off" | false>(false);
    const gestureStartPosition = useRef<Point>();

    const { onClick, onChange, onPointerCancel, onPointerDown, onPointerMove, onPointerUp } = options;

    const handleClick: MouseEventHandler<T> = useCallback(
        (event) => {
            if (!swipeHandled.current) {
                onClick?.(event);
            }
            swipeHandled.current = false; // sørg for at vi får klikke igjen etter swipes
        },
        [onClick],
    );

    const handleGestureStart: PointerEventHandler<T> = useCallback(
        (event) => {
            event.preventDefault();

            (event.target as T).setPointerCapture?.(event.pointerId);
            gestureStartPosition.current = getGesturePointFromEvent(event);
            swipeHandled.current = false;

            onPointerDown?.(event);
        },
        [onPointerDown],
    );

    const handleGestureMove: PointerEventHandler<T> = useCallback(
        (event) => {
            event.preventDefault();

            if (!gestureStartPosition.current) {
                return;
            }

            const { x: currentX } = getGesturePointFromEvent(event);
            const { x: startX } = gestureStartPosition.current;

            if (currentX - startX > 10 && onChange && swipeHandled.current !== "on") {
                onChange(event, true);
                swipeHandled.current = "on";
                gestureStartPosition.current = getGesturePointFromEvent(event);
            } else if (startX - currentX > 10 && onChange && swipeHandled.current !== "off") {
                onChange(event, false);
                swipeHandled.current = "off";
                gestureStartPosition.current = getGesturePointFromEvent(event);
            }

            onPointerMove?.(event);
        },
        [onPointerMove, onChange],
    );

    const handleGestureEnd: PointerEventHandler<T> = useCallback(
        (event) => {
            event.preventDefault();

            (event.target as T).releasePointerCapture?.(event.pointerId);
            gestureStartPosition.current = undefined;

            event.type === "pointerup" ? onPointerUp?.(event) : onPointerCancel?.(event);
        },
        [onPointerUp, onPointerCancel],
    );

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
