var navKeys = ["Tab", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];

function handleMouseDown() {
    if (window.keyboardnavigation) {
        window.keyboardnavigation = false;
        document.querySelector("html").removeAttribute("data-keyboardnavigation");
        window.removeEventListener("mousedown", handleMouseDown);
        // eslint-disable-next-line
        window.addEventListener("keydown", handleKeydown);
    }
}

function handleKeydown(event) {
    if (navKeys.indexOf(event.key) !== -1) {
        if (!window.keyboardnavigation) {
            window.keyboardnavigation = true;
            document.querySelector("html").setAttribute("data-keyboardnavigation", true);
            window.removeEventListener("keydown", handleKeydown);
            window.addEventListener("mousedown", handleMouseDown);
        }
    }
}

if (window && document) {
    window.addEventListener("keydown", handleKeydown);
}
