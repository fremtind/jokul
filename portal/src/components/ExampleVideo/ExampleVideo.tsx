import { Loader } from "@fremtind/jkl-loader-react";
import React, { FC, useEffect, useRef, useState } from "react";
import "./ExampleVideo.scss";

interface Props {
    videoUrl: string;
}

export const ExampleVideo: FC<Props> = ({ videoUrl }) => {
    const urlWithParams = `${videoUrl}?background=1&autoplay=0&loop=1`;
    const [play, setPlay] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [playing, setPlaying] = useState(false);
    const ref = useRef<HTMLIFrameElement>(null);

    const updatePlayerState = () => {
        if (ref.current) {
            const method = play ? "pause" : "play";
            const playerData = { method };
            ref.current.contentWindow?.postMessage(JSON.stringify(playerData), "*");
        }
    };

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
            className="example-video"
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
                <Loader className="example-video__loader" variant="small" textDescription="Venter på video" />
            )}
            <iframe
                tabIndex={-1}
                ref={ref}
                title="Eksempelvideo"
                src={urlWithParams}
                width="100%"
                height="250"
                frameBorder="0"
            />
        </div>
    );
};
