import React from "react";
import ReactDOM from "react-dom";
import "../src/button.scss";

const App = () => (
    <>
        <button className="jkl-button jkl-button--primary">
            <div className="jkl-button__label">En primærknapp med masse tekst</div>
        </button>
        <button className="jkl-button jkl-button--secondary">
            <div className="jkl-button__label">Kort</div>
        </button>
        <button className="jkl-button jkl-button--tertiary">
            <div className="jkl-button__label">Tertiærknapp</div>
        </button>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
