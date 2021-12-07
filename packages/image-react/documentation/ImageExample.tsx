import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { useScreen } from "@fremtind/jkl-react-hooks";
import React, { useState } from "react";
import { Image } from "../src";
import defaultSize from "./assets/defaultSize.jpg";
import largeSize from "./assets/largeSize.jpg";
import thumbnail from "./assets/thumbnail.jpg";
import "./style.scss";

export const ImageExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const { isSmallDevice } = useScreen();
    const [show, toggleShow] = useState(false);
    const color = choiceValues?.["Farge"] || "Default";

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
                className="jkl-spacing-xl--bottom jkl-button jkl-button--tertiary"
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
                <div className="jkl-spacing-xl--bottom">
                    <p className="jkl-body">With largeSize</p>
                    <Image
                        className="example-class"
                        defaultSize={defaultSize}
                        alt="Bilde av en sort hund av typen pug, kledd opp i en skjorte av blått jeansstoff"
                        largeSize={boolValues?.["LargeSize"] ? largeSize : undefined}
                        thumbnail={boolValues?.["Thumbnail"] ? thumbnail : undefined}
                        isSmallDevice={isSmallDevice}
                        inverted={boolValues?.["Invertert"]}
                        backgroundColor={boolValues?.["Bakgrunn"] && color !== "Default" ? color : undefined}
                    />
                </div>
            )}
        </div>
    );
};

export const imageExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
/**
 * import { useScreen } from "@fremtind/jkl-react-hooks";
 * import defaultSize from "./assets/defaultSize.jpg";
 * import largeSize from "./assets/largeSize.jpg";
 * import thumbnail from "./assets/thumbnail.jpg";
 */

const { isSmallDevice } = useScreen();

return (
    <Image
        alt="Bilde av en sort hund av typen pug, kledd opp i en skjorte av blått jeansstoff"
        backgroundColor=${
            boolValues?.["Bakgrunn"] && choiceValues?.["Color"] !== "Default" ? choiceValues?.["Color"] : "{undefined}"
        }
        thumbnail={${boolValues?.["Thumbnail"] ? "thumbnail" : "undefined"}}
        defaultSize={defaultSize}
        largeSize={${boolValues?.["LargeSize"] ? "largeSize" : "undefined"}}
        isSmallDevice={isSmallDevice}
    />
);
`;
