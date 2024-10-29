import classNames from "classnames";
import React, { FC, useRef, useState } from "react";
import "./ExampleVideo.scss";

interface Props {
    videoUrl: string;
}

export const ExampleVideo: FC<Props> = ({ videoUrl }) => {
    const urlWithParams = `${videoUrl}?background=1&autoplay=0&loop=1`;
    const [playing, togglePlayState] = useState(false);
    const ref = useRef<HTMLIFrameElement>(null);

    const togglePlay = () => {
        if (ref.current) {
            const method = playing ? "pause" : "play";
            const playerData = { method };
            ref.current.contentWindow?.postMessage(
                JSON.stringify(playerData),
                "*",
            );
            togglePlayState(!playing);
        }
    };

    const buttonClass = classNames("example-video__button", {
        "example-video__button--play": !playing,
        "example-video__button--pause": playing,
    });

    return (
        <div className="example-video">
            <button
                aria-label={playing ? "Pause" : "Play"}
                className={buttonClass}
                onClick={togglePlay}
            />
            <iframe
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
