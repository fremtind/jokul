import { InfoCard } from "@fremtind/jkl-card-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Fade } from "../src";
import "./fade-example.scss";

export const fadeExampleKnobs: ExampleKnobsProps = {};

export const FadeExample: FC<ExampleComponentProps> = () => {
    const [pressed, setPressed] = useState(false);
    return (
        <div>
            <ToggleSwitch
                className="jkl-portal-fade-example__switch"
                pressed={pressed}
                onClick={() => setPressed(!pressed)}
            >
                Vis
            </ToggleSwitch>
            <Fade in={pressed}>
                <div>
                    <InfoCard className="jkl-portal-fade-example__info-card">
                        <p>Har du tre eller flere forsikringer får du samlerabatt</p>
                    </InfoCard>
                </div>
            </Fade>
        </div>
    );
};

export default FadeExample;

export const fadeExampleCode: CodeExample = () => `
import { InfoCard } from "@fremtind/jkl-card-react";
import { Fade } from "@fremtind/jkl-transitions-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";

const [pressed, setPressed] = useState(true);
return (
    <div>
        <ToggleSwitch pressed={pressed} onClick={() => setPressed(!pressed)}>
            Vis
        </ToggleSwitch>
        <Fade in={pressed}>
            <div>
                <InfoCard>
                    <p>Har du tre eller flere forsikringer får du samlerabatt</p>
                </InfoCard>
            </div>
        </Fade>
    </div>
);
`;
