import React from "react";
import ReactDOM from "react-dom";
import "../divider-line.scss";

const App = () => (
    <div style={{ minWidth: "500px" }}>
        <hr className="jkl-divider" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
