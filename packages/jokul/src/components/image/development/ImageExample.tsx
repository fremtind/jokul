import React, { useState } from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { Image } from "../Image.js";
import "./style.scss";
import dog400 from "/img/dog-400.jpg";
import dog800 from "/img/dog-800.jpg";
import dog1200 from "/img/dog-1200.jpg";
import dog1920 from "/img/dog-1920.jpg";
import thumbnail from "/img/thumbnail.jpg";

const responsiveImage = {
    src: dog400,
    srcSet: `${dog400} 400w, ${dog800} 800w, ${dog1200} 1200w, ${dog1920} 1920w`,
    placeholder: thumbnail,
};

export const ImageExample: React.FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const [show, toggleShow] = useState(false);
    const className =
        choiceValues?.["Størrelsesforhold"] === "fast" ? "static" : "fluid";

    return (
        <div className="example-img-wrapper">
            <p className="jkl-body jkl-spacing-40--bottom">
                For å se effekten ordentlig,{" "}
                <a
                    className="jkl-link jkl-link--external"
                    href="https://developer.chrome.com/docs/devtools/network/reference/#throttling"
                >
                    skru ned hastigheten
                </a>{" "}
                i nettverksloggen din. For å se effekten på nytt,{" "}
                <a
                    className="jkl-link jkl-link--external"
                    href="https://developer.chrome.com/docs/devtools/network/reference/#clear-cache"
                >
                    tøm cachen
                </a>
                , still inn komponenten og trykk på last bilde.
            </p>
            <button
                type="button"
                className="jkl-spacing-40--bottom jkl-button jkl-button--secondary"
                data-testid="load-image-button"
                onClick={() => {
                    if (!show) {
                        return toggleShow(true);
                    }
                    return window.location.reload();
                }}
            >
                {!show ? "Last bilde" : "Last siden på nytt"}
            </button>
            {show && (
                <Image
                    {...responsiveImage}
                    alt="En sort hund av typen mops, kledd opp i en skjorte av blått jeansstoff"
                    className={className}
                />
            )}
        </div>
    );
};
