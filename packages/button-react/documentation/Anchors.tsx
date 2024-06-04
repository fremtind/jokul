import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";
import "./style.scss";

export const Anchors: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="jkl-button-example" style={{ textAlign: "center" }}>
            <div>
                <Button as="a" variant="primary" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                    Send inn
                </Button>
            </div>
            <div>
                <Button variant="secondary" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                    Lagre
                </Button>
            </div>
            <div>
                <Button variant="tertiary" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                    Avbryt
                </Button>
            </div>
            <div>
                <Button variant="ghost" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                    Vis mer
                </Button>
            </div>
        </div>
    );
};

export const AnchorsCode = `
<div>
    <Button
        variant="primary"
        as="a"
        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"
    >
        Send inn
    </Button>
</div>
<div>
    <Button
        variant="secondary" // Kan unnlates, secondary er standard variant
        as="a"
        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"
    >
        Lagre
    </Button>
</div>
<div>
    <Button
        variant="tertiary"
        as="a"
        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"
    >
        Avbryt
    </Button>
</div>
`;
