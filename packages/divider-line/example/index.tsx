import React from "react";
import ReactDOM from "react-dom";
import "../divider-line.scss";

const App = () => (
    <div style={{ width: "99vw" }}>
        <hr className="jkl-divider jkl-divider--spin" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
