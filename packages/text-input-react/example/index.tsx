import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import { TextArea, TextField, ActionTextField, InlineTextField } from "../src";
import "./index.scss";

initTabListener();

const TextFieldDemo = () => {
    const [value, setValue] = useState("");
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setValue(event.target.value);
    }
    return (
        <>
            <div className="side-by-side jkl-spacing--bottom-2">
                <pre>
                    <code>{`forceCompact={true}`}</code>
                </pre>
                <pre>
                    <code>{`forceCompact={false}`}</code>
                </pre>
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <ActionTextField
                    forceCompact
                    action="clear"
                    label="Nullstill felt"
                    value={value}
                    onClick={() => setValue("")}
                    onChange={(e) => setValue(e.target.value)}
                    description="Nullstill felt"
                />
                <ActionTextField
                    action="edit"
                    label="Skriv til konsoll"
                    value={value}
                    onClick={() => console.log(value)}
                    onChange={(e) => setValue(e.target.value)}
                    description="Skriv til konsoll"
                />
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <p className="jkl-small">
                    Jeg tjener <InlineTextField type="number" maxLength={5} label="kronebeløp" forceCompact /> kroner i
                    måneden.
                </p>
                <p className="jkl-p">
                    Jeg tjener <InlineTextField invalid type="number" maxLength={5} label="kronebeløp" /> kroner i
                    måneden.
                </p>
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <TextField
                    label="Fornavn"
                    value={value}
                    onChange={handleChange}
                    placeholder={"f.eks. Ola"}
                    variant="small"
                    helpLabel="La oss se..."
                    forceCompact
                    maxLength={10}
                />
                <TextField label="Fornavn" value={"Per"} onChange={handleChange} readOnly variant="small" />
            </div>

            <div className="side-by-side jkl-spacing--bottom-2">
                <TextField
                    forceCompact
                    label="Telefon"
                    type="tel"
                    value={value}
                    onChange={handleChange}
                    placeholder="999 99 999"
                />
                <TextField label="Telefon" type="tel" value={value} onChange={handleChange} placeholder="999 99 999" />
            </div>

            <div className="side-by-side jkl-spacing--bottom-5">
                <TextField
                    forceCompact
                    label="Passord"
                    type="password"
                    value={value}
                    onChange={handleChange}
                    helpLabel="Passord er en vanlig form for autentisering"
                    variant="large"
                />
                <TextField
                    label="Passord"
                    type="password"
                    value={value}
                    onChange={handleChange}
                    helpLabel="Passord er en vanlig form for autentisering"
                    variant="large"
                />
            </div>

            <div className="side-by-side jkl-spacing--bottom-4">
                <TextArea
                    rows={3}
                    label="Svar med en kommentar"
                    value={value}
                    onChange={handleChange}
                    forceCompact
                    placeholder="Begrens deg til tre linjer"
                />
                <TextArea
                    rows={3}
                    label="Svar med en kommentar"
                    value={value}
                    onChange={handleChange}
                    placeholder="Begrens deg til tre linjer"
                />
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <TextArea label="Din livshistorie" value={value} onChange={handleChange} variant="large" forceCompact />
                <TextArea label="Din livshistorie" value={value} onChange={handleChange} variant="large" />
            </div>
        </>
    );
};

ReactDOM.render(<TextFieldDemo />, document.getElementById("app"));
