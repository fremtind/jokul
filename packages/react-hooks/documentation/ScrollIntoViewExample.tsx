import React, { useRef, useState } from "react";
import { useScrollIntoView } from "../src";

const ScrollIntoViewExample: React.FC = () => {
    const [autoScroll, toggleAutoScroll] = useState(false);
    const [timeout, updateTimeout] = useState(0);

    const ref = useRef<HTMLDivElement>(null);
    const [manualScroll] = useScrollIntoView({ ref, timeout, autoScroll });

    return (
        <section style={{ height: "100vh", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <button
                        className="jkl-button jkl-button--primary jkl-spacing-xl--bottom"
                        onClick={() => toggleAutoScroll(!autoScroll)}
                    >
                        {autoScroll ? "Skru av" : "Skru på"}
                    </button>
                    <button
                        className="jkl-button jkl-button--secondary jkl-spacing-l--left"
                        onClick={manualScroll}
                    >
                        Scroll
                    </button>
                </div>
                <label htmlFor="autoscroll-input" className="jkl-label--medium">
                    Sett ventetid før autoscroll
                </label>
                <input
                    id="autoscroll-input"
                    className="jkl-text-input__input"
                    style={{ width: "10ch" }}
                    value={timeout}
                    type="number"
                    onChange={(val) => {
                        toggleAutoScroll(false);
                        if (val.currentTarget.value !== "") {
                            updateTimeout(
                                parseInt(val.currentTarget.value, 10),
                            );
                        }
                    }}
                />
            </div>
            <div ref={ref} style={{ position: "absolute", bottom: 0 }}>
                AutoScroll here
            </div>
        </section>
    );
};

export default ScrollIntoViewExample;
