import { Loader } from "@fremtind/jkl-loader-react";
import { usePreviousValue } from "@fremtind/jkl-react-hooks";
import React, { type FC, useCallback, useEffect, useRef, useState } from "react";

export interface VimeoPlayerProps {
    title: string;
    source: string;
    isActive?: boolean;
    play?: boolean;
}

export const VimeoPlayer: FC<VimeoPlayerProps> = ({
    source,
    title,
    isActive: isActiveProp = false,
    play: playProp = false,
}) => {
    const sourceWithParams = `${source}?background=1&autoplay=0&loop=1`;

    const [play, setPlay] = useState(playProp);
    const [isActive, setIsActive] = useState(isActiveProp);
    const [playing, setPlaying] = useState(false);
    const ref = useRef<HTMLIFrameElement>(null);

    const updatePlayerState = useCallback(() => {
        if (ref.current) {
            const method = play ? "pause" : "play";
            const playerData = { method };
            ref.current.contentWindow?.postMessage(JSON.stringify(playerData), "*");
        }
    }, [play]);

    const prevPlay = usePreviousValue(playProp);
    useEffect(() => {
        if (typeof prevPlay !== "undefined" && prevPlay !== playProp) {
            setPlay(playProp);
            updatePlayerState();
        }
    }, [playProp, prevPlay, updatePlayerState, setPlay]);

    useEffect(() => {
        const onMessage = (message: MessageEvent) => {
            if (message.source !== ref.current?.contentWindow) {
                return;
            }
            const data: { method: "play" | "pause" } = JSON.parse(message.data);
            setPlaying(data.method === "play");
        };

        if (window) {
            window.addEventListener("message", onMessage);
        }

        return () => {
            if (window) {
                window.removeEventListener("message", onMessage);
            }
        };
    });

    const onEnter = () => {
        setPlay(true);
        setIsActive(true);
        updatePlayerState();
    };

    const onExit = () => {
        setPlay(false);
        setIsActive(false);
        updatePlayerState();
    };

    const togglePlay = () => {
        setPlay(!play);
        updatePlayerState();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            togglePlay();
        }
    };

    return (
        <div
            className="vimeo-player"
            onMouseEnter={onEnter}
            onMouseLeave={onExit}
            onFocus={onEnter}
            onBlur={onExit}
            onKeyDown={onKeyDown}
            aria-label={play ? "Pause" : "Play"}
            role="button"
            tabIndex={0}
        >
            {isActive && !playing && (
                <Loader className="vimeo-player__loader" variant="small" textDescription="Venter på video" />
            )}
            <iframe
                tabIndex={-1}
                ref={ref}
                title={title}
                src={sourceWithParams}
                width="100%"
                height="250"
                frameBorder="0"
            />
        </div>
    );
};
