import { useState, useEffect } from "react";

interface Props {
    lowQualitySrc: string;
    highQualitySrc: string;
}

export const useProgressiveImg = ({ lowQualitySrc, highQualitySrc }: Props) => {
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
