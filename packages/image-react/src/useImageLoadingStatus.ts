import { RefObject, useEffect, useRef, useState } from "react";

const doWhenImageLoaded = (image: HTMLImageElement, callback?: () => void) => {
    let timeout: number | undefined;

    function checkLoaded() {
        if (image.complete) {
            clearTimeout(timeout);
            callback?.();
            return;
        }
        timeout = window.setTimeout(checkLoaded, 50);
    }

    checkLoaded();
};

export const useImageLoadingStatus = (
    callback?: () => void,
): [RefObject<HTMLImageElement>, boolean] => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        imageRef.current &&
            doWhenImageLoaded(imageRef.current, () => {
                setImageLoaded(true);
                callback?.();
            });
    }, [callback]);

    return [imageRef, imageLoaded];
};
