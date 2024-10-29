import React, { useState } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Image } from "../src";
import dog1200 from "./assets/dog-1200.jpg";
import dog1920 from "./assets/dog-1920.jpg";
import dog400 from "./assets/dog-400.jpg";
import dog800 from "./assets/dog-800.jpg";
import thumbnail from "./assets/thumbnail.jpg";
import "./style.scss";

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
            <p className="jkl-body jkl-spacing-xl--bottom">
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
                className="jkl-spacing-xl--bottom jkl-button jkl-button--secondary"
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

export const imageExampleCode: CodeExample = ({ choiceValues }) => {
    const className =
        choiceValues?.["Størrelsesforhold"] === "fast" ? "static" : "fluid";

    return `
/**
 * stilark:
 * .static {
 *     width: 100%;
 *     aspect-ratio: 4/3;
 * }
 * .fluid {
 *     width: 100%;
 *     height: 25rem;
 * }
 */

import dog400 from "./assets/dog-400.jpg";
import dog800 from "./assets/dog-800.jpg";
import dog1200 from "./assets/dog-1200.jpg";
import dog1920 from "./assets/dog-1920.jpg";
import thumbnail from "./assets/thumbnail.jpg"; 

// Du kan få disse verdiene automatisk ved å bruke f.eks. responsive-loader i webpack
const imageSource = {
    src: dog400,
    srcSet: \`\${dog400} 400w, \${dog800} 800w, \${dog1200} 1200w, \${dog1920} 1920w\`,
    placeholder: thumbnail,
}

return (
    <Image
        {...imageSource}
        alt="Bilde av en sort hund av typen mops, kledd opp i en skjorte av blått jeansstoff"
        className="${className}"
    />
);
`;
};
