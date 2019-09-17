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
                <Field legend="Fornavn">
                    <TextField value={value} onChange={handleChange} placeholder={"Her kan du skrive!"} />
                </Field>
                <Field legend="Fornavn">
                    <TextField value={"Per"} onChange={handleChange} readOnly />
                </Field>
            </div>

            <Field legend="Telefonnummer" helpLabel="Åtte siffer">
                <TextField type="tel" value={value} onChange={handleChange} chars={8} />
            </Field>
            <Field legend="Passord" helpLabel="Passord er en vanlig identifikasjonsmetode">
                <TextField type="password" value={value} onChange={handleChange} />
            </Field>
            <Field legend="E-post">
                <TextField type="email" value={value} onChange={handleChange} />
            </Field>

            <Field legend="Svar med en kommentar" helpLabel="Høyde begrenset til 3 linjer">
                <TextArea rows={3} value={value} onChange={handleChange} />
            </Field>
            <Field legend="Din livshistorie">
                <TextArea value={value} onChange={handleChange} placeholder="Her kan du skrive langt" />
            </Field>
        </>
    );
};

ReactDOM.render(<TextFieldDemo />, document.getElementById("app"));
