import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextField, TextArea } from "../src";
import "@fremtind/jkl-text-input/text-input.scss";

const TextFieldDemo = () => {
    const [value, setValue] = useState("");
    return (
        <div style={{ margin: "36px", padding: "36px", border: "1px solid black", background: "#fafafa" }}>
            <div style={{ paddingTop: "64px" }}>
                <TextField label="Fornavn" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextField label="Fornavn" value={"Something"} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextField label="Telefon" type="tel" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextField label="Passord" type="password" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextField label="Epost" type="email" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextArea label="Moreinfo" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ paddingTop: "64px" }}>
                <TextArea label="Moreinfo" value={"Something"} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<TextFieldDemo />, mountNode);
