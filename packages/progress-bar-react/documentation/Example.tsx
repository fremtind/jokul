import React, { useState } from "react";
import { ProgressBar } from "../src";
import "@fremtind/jkl-progress-bar/progress-bar.css";
import "@fremtind/jkl-core/core.min.css";

export const Example = () => {
    const [val, setVal] = useState(50);

    return (
        <div className="jkl-spacing--all-3">
            <ProgressBar progress={{ current: val, total: 100 }} />
            <div className="jkl-spacing--top-2" style={{ display: "flex", flexDirection: "column" }}>
                <h2 className="jkl-h3">Controls</h2>
                <div>
                    <button onClick={() => setVal(val - 10 < 0 ? 0 : val - 10)}>-</button>
                    <button onClick={() => setVal(val + 10 > 100 ? 100 : val + 10)}>+</button>
                </div>
                <input
                    className="jkl-spacing--top-2"
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => setVal(parseInt(e.target.value, 10))}
                ></input>
            </div>
        </div>
    );
};
