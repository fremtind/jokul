import React from "react";
import ReactDOM from "react-dom";
import "../card.scss";

const Sample = () => (
    <div className="jkl-card">
        <h1 className="jkl-h3">Heading</h1>
        <p className="jkl-p">
            For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to think of going
            indoors when, all at once, the car burst into the pure and starlit region of the upper air.
        </p>
    </div>
);

ReactDOM.render(<Sample />, document.getElementById("app"));
