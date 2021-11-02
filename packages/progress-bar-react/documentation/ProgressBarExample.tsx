import React, { VFC, useState } from "react";
import { ProgressBar } from "../src";

export const ProgressBarExample: VFC = () => {
    const [val, setVal] = useState(50);

    return (
        <div style={{ width: "100%" }}>
            <ProgressBar progress={{ current: val, total: 100 }} />
            <div className="jkl-spacing-l--top" style={{ display: "flex", flexDirection: "column" }}>
                <h2 className="jkl-h3">Controls</h2>
                <div>
                    <button onClick={() => setVal(val - 10 < 0 ? 0 : val - 10)}>-</button>
                    <button onClick={() => setVal(val + 10 > 100 ? 100 : val + 10)}>+</button>
                </div>
                <input
                    className="jkl-spacing-xl--top"
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
