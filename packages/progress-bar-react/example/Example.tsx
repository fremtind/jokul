import React, { useState } from "react";
import { ProgressBar } from "../src";
import { initTabListener } from "@fremtind/jkl-core";

export const Example = () => {
    initTabListener();
    const [val, setVal] = useState(50);

    return (
        <div style={{ width: "100%" }}>
            <h1 className="jkl-h1">ProgressBar</h1>
            <ProgressBar progress={{ current: val, total: 100 }} />
            <div className="jkl-spacing--top-2" style={{ display: "flex", flexDirection: "column" }}>
                <h2 className="jkl-h3">Controls</h2>
                <button onClick={() => setVal(val + 10 > 100 ? 100 : val + 10)}>+</button>
                <button onClick={() => setVal(val - 10 < 0 ? 0 : val - 10)}>-</button>
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
