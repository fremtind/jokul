let mousenavigation = false;

function handleMouseDown() {
    if (!mousenavigation) {
        mousenavigation = true;
        const htmlElement = document.querySelector("html");
        htmlElement && htmlElement.setAttribute("data-mousenavigation", "true");
        document.removeEventListener("mousedown", handleMouseDown);
        document.addEventListener("keydown", handleKeydown);
    }
}

function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Tab") {
        if (mousenavigation) {
            mousenavigation = false;
            const htmlElement = document.querySelector("html");
            htmlElement && htmlElement.removeAttribute("data-mousenavigation");
            document.removeEventListener("keydown", handleKeydown);
            document.addEventListener("mousedown", handleMouseDown);
        }
    }
}

export function initTabListener() {
    if (document) {
        document.addEventListener("mousedown", handleMouseDown);
    }
}
