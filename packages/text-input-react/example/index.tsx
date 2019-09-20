import { initTabListener } from "@fremtind/jkl-core";
import { Field } from "@fremtind/jkl-field-group-react";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-text-input/text-input.scss";
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
                <TextField value={value} onChange={handleChange} placeholder={"Her kan du skrive!"} />
                <TextField value={"Per"} onChange={handleChange} readOnly />
            </div>

            <TextField type="tel" value={value} onChange={handleChange} chars={8} />
            <TextField type="password" value={value} onChange={handleChange} />

            <TextField type="email" value={value} onChange={handleChange} />
            <TextArea rows={3} value={value} onChange={handleChange} />

            <TextArea value={value} onChange={handleChange} />
        </>
    );
};

ReactDOM.render(<TextFieldDemo />, document.getElementById("app"));
