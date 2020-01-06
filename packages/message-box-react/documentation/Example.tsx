import React, { useState, ChangeEvent } from "react";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-message-box/message-box.scss";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

const Example = () => {
    const types = [
        { label: "InfoMessage (blå)", component: InfoMessage },
        { label: "WarningMessage (gul)", component: WarningMessage },
        { label: "ErrorMessage (rød)", component: ErrorMessage },
        { label: "SuccessMessage (grønn)", component: SuccessMessage },
    ];
    const [selectedType, setSelectedType] = useState(0);
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedType(parseInt(e.target.value));
    const C = types[selectedType].component;
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <label className="jkl-spacing--bottom-1">
                Velg type melding:
                {/* eslint-disable jsx-a11y/no-onchange */}
                <select value={selectedType} onChange={handleChange}>
                    {types.map((type, i) => (
                        <option key={type.label} value={i}>
                            {type.label}
                        </option>
                    ))}
                </select>
                {/* eslint-enable jsx-a11y/no-onchange */}
            </label>
            <C className="jkl-spacing--bottom-2" title={types[selectedType].label}>
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </C>
            <C className="jkl-spacing--bottom-2" fullWidth title={`${types[selectedType].label} fullWidth`}>
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </C>
        </section>
    );
};

export default Example;
