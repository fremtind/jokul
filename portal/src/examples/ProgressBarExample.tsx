import React from "react";
import { Example } from "../components";
import { ProgressBar } from "@fremtind/jkl-progress-bar-react";
import "@fremtind/jkl-progress-bar/progress-bar.min.css";

import progressBarType from "!raw-loader!@fremtind/jkl-progress-bar-react/build/ProgressBar.d.ts";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";

const example = `() => {
    const [val, setVal] = React.useState(50);
    const add = () => setVal(val + 10 > 100 ? 100 : val + 10);
    const subtract = () => setVal(val - 10 < 0 ? 0 : val - 10);
    const onChange = (e) => setVal(parseInt(e.target.value, 10));

    return (
        <div style={{ width: "100%" }}>

            <ProgressBar progress={{ current: val, total: 100 }} />

            <div className="jkl-spacing--top-2" style={{ display: "flex", flexDirection: "column" }}>
                <h2 className="jkl-h3">Controls</h2>
                <div>
                    <PrimaryButton className="jkl-spacing--right-1" onClick={add}>Pluss</PrimaryButton>
                    <SecondaryButton onClick={subtract}>Minus</SecondaryButton>
                </div>
                <input
                    className="jkl-spacing--top-2"
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={onChange}
                ></input>
            </div>
        </div>
    )
}`;

const exampleImport = `import { ProgressBar } from "@fremtind/jkl-progress-bar-react";
import "@fremtind/jkl-progress-bar/progress-bar.css";`;

const ProgressBarExample = () => (
    <Example
        exampleComponents={{ ProgressBar, PrimaryButton, SecondaryButton }}
        exampleCode={example}
        type={progressBarType}
        exampleImport={exampleImport}
    />
);

export default ProgressBarExample;
