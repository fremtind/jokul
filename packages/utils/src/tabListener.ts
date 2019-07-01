const navKeys = ["Tab", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
let mousenavigation = false;

function handleMouseDown() {
    if (!mousenavigation) {
        mousenavigation = true;
        const htmlElement = document.querySelector("html");
        htmlElement && htmlElement.setAttribute("data-mousenavigation", "true");
        window.removeEventListener("mousedown", handleMouseDown);
        window.addEventListener("keydown", handleKeydown);
    }
}

function handleKeydown(event: KeyboardEvent) {
    if (navKeys.indexOf(event.key) !== -1) {
        if (mousenavigation) {
            mousenavigation = false;
            const htmlElement = document.querySelector("html");
            htmlElement && htmlElement.removeAttribute("data-mousenavigation");
            window.removeEventListener("keydown", handleKeydown);
            window.addEventListener("mousedown", handleMouseDown);
        }
    }
}

export function initTabListener() {
    if (window && document) {
        window.addEventListener("mousedown", handleMouseDown);
    }
}
