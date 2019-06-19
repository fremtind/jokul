import React from "react";
import ReactDOM from "react-dom";
import "../toggle-switch.scss";

// eslint-disable-next-line
const Input = ({ id, label, valid = false }: any) => (
    <>
        <label className="toggle_switch_label" htmlFor={id}>
            <span>{label}</span>
            <input aria-invalid={valid} className="switch" type="checkbox" id={id} />
            <span className="slider round"></span>
        </label>
    </>
);

const Inputs = () => (
    <main style={{ padding: "0", backgroundColor: "#3d3d3d" }}>
        <div style={{ padding: "0", backgroundColor: "#fafafa" }}>
            <Input label="GPS-sporing" value={1} id="toggle_1"></Input>
        </div>
    </main>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Inputs />, mountNode);
