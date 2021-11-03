import { ExampleComponentProps } from "../../../doc-utils";
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

    const inverted = !!(boolValues && boolValues["Invertert"]);
    const withBackgroundColor = boolValues && boolValues["Bakgrunn"];
    const withThumbnail = boolValues && boolValues["Thumbnail"];
    const withLargeSize = boolValues && boolValues["LargeSize"];
    const color = choiceValues ? choiceValues["Farge"] : "Default";

    return (
        <div className="example-img-wrapper">
            <p className="jkl-body jkl-spacing-xl--bottom">
                Denne komponenten er til for å optimalisere innlasting av bilder, det gjør den litt vanskelig å
                visualisere, siden den prøver å huske så godt den kan. For å se effekten ordentlig, skru ned hastigheten
                i nettverksloggen din. For å se effekten på nytt, gjør en hard refresh (ctrl+shift+r), still inn
                komponenten og trykk på last bilde.
            </p>
            <button
                className="jkl-spacing-xl--bottom"
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
                        alt="dog"
                        largeSize={withLargeSize ? largeSize : undefined}
                        thumbnail={withThumbnail ? thumbnail : undefined}
                        isSmallDevice={isSmallDevice}
                        inverted={inverted}
                        backgroundColor={withBackgroundColor && color !== "Default" ? color : undefined}
                    />
                </div>
            )}
        </div>
    );
};
