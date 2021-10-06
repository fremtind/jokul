import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import "./style.scss";

export const Anchors: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="jkl-button-example">
            <div>
                <a className="jkl-button jkl-button--primary" href="/komponenter/buttons#knapper-som-er-lenker">
                    Send inn
                </a>
            </div>
            <div>
                <a className="jkl-button jkl-button--secondary" href="/komponenter/buttons#knapper-som-er-lenker">
                    Lagre
                </a>
            </div>
            <div>
                <a className="jkl-button jkl-button--tertiary" href="/komponenter/buttons#knapper-som-er-lenker">
                    Avbryt
                </a>
            </div>
        </div>
    );
};

export const AnchorsCode = `
<div>
    <a
        className="jkl-button jkl-button--primary"
        href="/komponenter/buttons#knapper-som-er-lenker"
    >
        Send inn
    </a>
</div>
<div>
    <a
        className="jkl-button jkl-button--secondary"
        href="/komponenter/buttons#knapper-som-er-lenker"
    >
        Lagre
    </a>
</div>
<div>
    <a
        className="jkl-button jkl-button--tertiary"
        href="/komponenter/buttons#knapper-som-er-lenker"
    >
        Avbryt
    </a>
</div>
`;
