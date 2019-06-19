import React from "react";
import ReactDOM from "react-dom";
import "../text-field.scss";

// eslint-disable-next-line
const Input = ({ label, valid = false }: any) => (
    <label className="jkl-text-field" htmlFor="demo-field">
        <input aria-invalid={valid} className="jkl-text-field__input" type="text" id="demo-field" placeholder=" " />
        <span className="jkl-text-field__label">{label}</span>
        <span className="jkl-text-field__border"></span>
    </label>
);

const Inputs = () => (
    <main style={{ padding: "36px", backgroundColor: "#3d3d3d", height: "100vh" }}>
        <div style={{ padding: "36px", backgroundColor: "#fafafa" }}>
            <Input label="Fornavn" />
            <Input label="Etternavn" />
            <Input label="Epost" valid={true} />
        </div>
    </main>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Inputs />, mountNode);
