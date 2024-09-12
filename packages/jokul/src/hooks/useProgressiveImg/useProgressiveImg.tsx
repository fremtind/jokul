import { useState, useEffect } from "react";

export interface ProgressiveImageProps {
    lowQualitySrc: string;
    highQualitySrc: string;
}

type ProgressiveImage = { src: string; isBlurred: boolean };

export const useProgressiveImg = ({ lowQualitySrc, highQualitySrc }: ProgressiveImageProps): ProgressiveImage => {
    const [src, setSrc] = useState(lowQualitySrc);

    useEffect(() => {
        setSrc(lowQualitySrc);
        const img = new Image();
        img.src = highQualitySrc;

        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [lowQualitySrc, highQualitySrc]);

    return { src, isBlurred: src === lowQualitySrc };
};
