import { RefObject, useEffect } from "react";

function calculateAndSetElementHeight(rows: number, textAreaElement: HTMLTextAreaElement) {
    const lineHeightWithPx = window.getComputedStyle(textAreaElement).lineHeight;
    const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
    // 16px is sum of top and bottom padding
    textAreaElement.style.height = `${rows * lineHeight + 16}px`;
}

export function useExpandingTextArea(
    textAreaRef: RefObject<HTMLTextAreaElement>,
    rows: number,
    value?: string,
    autoExpand?: boolean,
    textAreaFocused?: boolean,
) {
    const textAreaContentRows = (value || "").split("\n").length;

    let textAreaRows: number = textAreaContentRows;

    useEffect(() => {
        if (textAreaRef.current && !autoExpand) {
            // reset style attribute if no longer autoExpanding.
            textAreaRef.current.setAttribute("style", "");
        }
    }, [autoExpand]);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (autoExpand && textAreaElement && !textAreaElement.style.height) {
            textAreaElement.style.overflowY = "hidden";
            calculateAndSetElementHeight(textAreaRows, textAreaElement);
        }
    }, []);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;

        if (textAreaFocused && rows > textAreaContentRows) {
            textAreaRows = rows;
        }

        let rowToCalculateHeightFrom = textAreaRows;

        if (textAreaFocused) {
            // While the text-area has focus we keep the height 1 row higher than the actual row count.
            // If we don't do this it creates a weird scrolling effect that while we are transitioning from
            // one height to the next height.
            rowToCalculateHeightFrom += 1;
        } else if (value && rowToCalculateHeightFrom < rows) {
            rowToCalculateHeightFrom = rows;
        }

        if (autoExpand && textAreaElement) {
            calculateAndSetElementHeight(rowToCalculateHeightFrom, textAreaElement);
        }
    }, [textAreaRows, textAreaFocused]);

    return { textAreaRows };
}
