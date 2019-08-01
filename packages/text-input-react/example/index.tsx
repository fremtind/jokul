import React, { useState, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import { TextField, TextArea } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
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
                <TextField label="Fornavn" value={value} onChange={handleChange} />
                <TextField label="Fornavn" value={"Per"} onChange={handleChange} readOnly />
            </div>

            <TextField label="Telefon" type="tel" value={value} onChange={handleChange} />
            <TextField
                label="Passord"
                type="password"
                value={value}
                onChange={handleChange}
                isInvalid
                errorText="Passord er en vanlig form for autentisering"
            />
            <TextField
                label="Epost"
                type="email"
                value={value}
                onChange={handleChange}
                helpText="Postsystem for oversending av elektroniske dokumenter mellom datamaskiner"
            />

            <TextArea label="Din livshistorie" value={value} onChange={handleChange} />
            <TextArea label="Din livshistorie" value={"Det hendte i de dager …"} onChange={handleChange} />
        </>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<TextFieldDemo />, mountNode);
