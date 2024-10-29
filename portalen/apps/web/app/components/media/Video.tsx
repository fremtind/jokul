/* eslint-disable jsx-a11y/media-has-caption */
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import { type Media } from "@org/cms";
import cn from "classnames";
import React, { type FC, type VideoHTMLAttributes } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export interface VideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "playsInline"> {
    src: string | Media;
    srcDark?: string | Media;
    /**
     * Angi om videoen kun skal spille av ved hover. Kan være nyttig
     * dersom videoen skal vises inne i et interaktivt element.
     * Hvis false vil videoen ha en knapp for pause/play.
     * @default false
     */
    onlyPlayOnHover?: boolean;
}

/**
 * Komponent for å vise videoer fra Media-collection i CMSet, eller fra en URL.
 */
export const Video: FC<VideoProps> = ({ className, src, onlyPlayOnHover = false, ...videoProps }) => {
    const { prefersReducedMotion } = useBrowserPreferences();
    const useAutoPlay = !prefersReducedMotion && videoProps.autoPlay;
    const video = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlaying = useCallback(() => {
        isPlaying ? video.current?.pause() : video.current?.play();
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    useEffect(() => {
        const videoEl = video.current;
        const handleMouseEnter = () => videoEl?.play();
        const handleMouseLeave = () => videoEl?.pause();

        if (onlyPlayOnHover) {
            videoEl?.addEventListener("mouseenter", handleMouseEnter);
            videoEl?.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            videoEl?.removeEventListener("mouseenter", handleMouseEnter);
            videoEl?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [onlyPlayOnHover]);

    return (
        <div className={cn("jkl-portal-video", className)}>
            <video
                ref={video}
                {...videoProps}
                playsInline
                autoPlay={useAutoPlay}
                width="100%"
                muted={
                    /* By default, Chrome only allows autoplay for muted media */
                    useAutoPlay
                }
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src={typeof src === "string" ? src : src.url || ""}
                    type={typeof src === "string" ? undefined : src.mimeType || ""}
                />
                {/* Chrome was refusing to play a Quicktime video when a
                 * source type was provided. Just in case other browsers
                 * have the opposite behaviour, add one source with type
                 * and one without */}
                <source src={typeof src === "string" ? src : src.url || ""} />
            </video>
            {!onlyPlayOnHover && (
                <button onClick={togglePlaying} className="jkl-portal-video__pause-button">
                    {/* TODO: Fiks ordentlige ikoner for disse */}
                    {isPlaying ? "⏸️" : "▶️"}
                </button>
            )}
        </div>
    );
};
