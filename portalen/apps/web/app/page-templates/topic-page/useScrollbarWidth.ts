import { useEffect, useState } from "react";

export const useScrollbarWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const el = document.createElement("div");
        el.style.width = "50px";
        el.style.height = "50px";
        el.style.overflowY = "scroll";
        el.style.position = "absolute";
        el.style.left = "-5000px";
        document.body.append(el);
        setWidth(el.offsetWidth - el.clientWidth);
        el.remove();
    }, []);

    return width;
};
