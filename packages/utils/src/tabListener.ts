const navKeys = ["Tab", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
let keyboardnavigation = false;

function handleMouseDown() {
    if (keyboardnavigation) {
        keyboardnavigation = false;
        const htmlElement = document.querySelector("html");
        htmlElement && htmlElement.removeAttribute("data-keyboardnavigation");
        window.removeEventListener("mousedown", handleMouseDown);
        window.addEventListener("keydown", handleKeydown);
    }
}

function handleKeydown(event: KeyboardEvent) {
    if (navKeys.indexOf(event.key) !== -1) {
        if (!keyboardnavigation) {
            keyboardnavigation = true;
            const htmlElement = document.querySelector("html");
            htmlElement && htmlElement.setAttribute("data-keyboardnavigation", "true");
            window.removeEventListener("keydown", handleKeydown);
            window.addEventListener("mousedown", handleMouseDown);
        }
    }
}

export function initTabListener() {
    if (window && document) {
        window.addEventListener("keydown", handleKeydown);
    }
}
