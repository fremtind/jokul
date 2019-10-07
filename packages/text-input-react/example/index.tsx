import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import { TextArea, TextField } from "../src";
import "./index.scss";

initTabListener();

const TextFieldDemo = () => {
    const [value, setValue] = useState("");
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setValue(event.target.value);
    }
    return (
        <>
            <div className="side-by-side">
                <TextField
                    label="Fornavn"
                    value={value}
                    onChange={handleChange}
                    placeholder={"Norsk"}
                    variant="small"
                    helpLabel="La oss se..."
                    maxLength={10}
                />
                <TextField label="Fornavn" value={"Per"} onChange={handleChange} readOnly variant="small" />
            </div>

            <TextField label="Telefon" type="tel" value={value} onChange={handleChange} placeholder="999 99 999" />
            <TextField
                label="Passord"
                type="password"
                value={value}
                onChange={handleChange}
                helpLabel="Passord er en vanlig form for autentisering"
                variant="secondary"
            />
            <TextField
                label="Epost"
                type="email"
                value={value}
                onChange={handleChange}
                helpLabel="Postsystem for oversending av elektroniske dokumenter mellom datamaskiner"
                variant="small"
            />

            <TextArea
                rows={3}
                label="Svar med en kommentar"
                value={value}
                onChange={handleChange}
                //variant="small"
                placeholder="Begrens deg til tre linjer"
            />
            <TextArea label="Din livshistorie" value={value} onChange={handleChange} variant="secondary" />
        </>
    );
};

ReactDOM.render(<TextFieldDemo />, document.getElementById("app"));
