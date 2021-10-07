import React, { FC, useState } from "react";
import { usePreviousValue } from "../src";

const usePreviousValueExample: FC = () => {
    const [state, setState] = useState(0);
    const previousValue = usePreviousValue(state);

    return (
        <section>
            <p className="jkl-body jkl-spacing--bottom-1">
                Nåværende verdi: {state}
                <br />
                Forrige verdi: {previousValue?.toString() ?? "undefined"}
            </p>
            <button className="jkl-button jkl-button--primary" onClick={() => setState(state + 1)}>
                Inkrementer
            </button>
        </section>
    );
};

export default usePreviousValueExample;
