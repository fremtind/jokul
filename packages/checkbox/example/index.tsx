import React from "react";
import ReactDOM from "react-dom";
import "@fremtind/jkl-core/core.css";
import "../checkbox.scss";

const App = () => (
    <>
        <label className="jkl-checkbox">
            <input className="jkl-checkbox__input" type="checkbox" />
            <span className="jkl-checkbox__check-mark" />I am checkbox
        </label>
        <label className="jkl-checkbox">
            <input className="jkl-checkbox__input" type="checkbox" />
            <span className="jkl-checkbox__check-mark" />
            Do you like mulitple choices?
        </label>

        <div style={{ display: "flex", flexFlow: "column", marginTop: "5rem" }}>
            <label className="jkl-checkbox">
                <input className="jkl-checkbox__input" type="checkbox" />
                <span className="jkl-checkbox__check-mark" />I am checkbox
            </label>
            <label className="jkl-checkbox">
                <input className="jkl-checkbox__input" type="checkbox" />
                <span className="jkl-checkbox__check-mark" />
                Do you like mulitple choices?
            </label>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
