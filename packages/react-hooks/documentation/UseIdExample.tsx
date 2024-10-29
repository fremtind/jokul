import React, { useState } from "react";
import { useId } from "../src";

export const UseIdExample = () => {
    const elId = useId("jkl-useid-example");
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className="jkl-body jkl-spacing-l--bottom" id={elId}>
                Denne paragrafen har id følgende id: <strong>{elId}</strong>.
                Selv om elementet rendrer på nytt, vil ikke id endres.
                <br />
                <button
                    className="jkl-button jkl-button--primary jkl-spacing-m--top"
                    onClick={() => setCount(count + 1)}
                >
                    Trigger en re-render
                </button>
            </p>
        </div>
    );
};
