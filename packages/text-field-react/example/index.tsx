import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextField, TextArea } from "../src";
import "@fremtind/jkl-text-field/text-field.scss";

const TextFieldDemo = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <TextField label="Fornavn" value={value} onChange={(e) => setValue(e.target.value)} />
            <TextField label="Telefon" type="tel" value={value} onChange={(e) => setValue(e.target.value)} />
            <TextField label="Passord" type="password" value={value} onChange={(e) => setValue(e.target.value)} />
            <TextField label="Epost" type="email" value={value} onChange={(e) => setValue(e.target.value)} />
            <TextArea label="Moreinfo" value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<TextFieldDemo />, mountNode);
