let mousenavigation = false;
let touchnavigation = false;
let touchEventFired = false;

const listeners = {
    mousedown: handleMouseDown as EventListener,
    keydown: handleKeydown as EventListener,
    touchstart: handleTouchStart as EventListener,
};

function removeAllListeners() {
    (Object.keys(listeners) as Array<keyof typeof listeners>).forEach((listenerType) => {
        document.removeEventListener(listenerType, listeners[listenerType]);
    });
}

function addListener(listenerType: keyof typeof listeners) {
    document.addEventListener(listenerType, listeners[listenerType]);
}

function handleMouseDown() {
    if (!mousenavigation && !touchEventFired) {
        mousenavigation = true;
        touchnavigation = false;
        const htmlElement = document.querySelector("html");
        htmlElement?.setAttribute("data-mousenavigation", "true");
        htmlElement?.removeAttribute("data-touchnavigation");

        // Reset listeners
        removeAllListeners();
        addListener("touchstart");
        addListener("keydown");
    }
}

function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Tab" || ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        const htmlElement = document.querySelector("html");
        removeAllListeners();
        htmlElement?.removeAttribute("data-mousenavigation");
        htmlElement?.removeAttribute("data-touchnavigation");
        mousenavigation = false;
        touchnavigation = false;

        // Reset listeners
        addListener("touchstart");
        addListener("mousedown");
    }
}

function handleTouchStart() {
    if (!touchnavigation) {
        mousenavigation = false;
        touchnavigation = true;
        const htmlElement = document.querySelector("html");
        htmlElement?.setAttribute("data-touchnavigation", "true");
        htmlElement?.removeAttribute("data-mousenavigation");

        // Reset listeners
        removeAllListeners();
        addListener("touchstart");
        addListener("keydown");
        addListener("mousedown");
    }

    // Most touch devices fire both touch and mouse events on touch (in that order)
    // see https://w3c.github.io/touch-events/#mouse-events
    // Set a check variable to avoid resetting the data-attribute:
    touchEventFired = true;
    setTimeout(() => {
        touchEventFired = false;
    }, 150); // Yes, it can take this long between the events
}

export function initTabListener(): void {
    if (typeof document !== "undefined") {
        addListener("touchstart");
        addListener("mousedown");
    }
}
