import React from "react";
import ReactDOM from "react-dom";
import "../loader.scss";

const Loaders = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <span className="jkl-loader">
                <span className="jkl-loader__1" />
                <span className="jkl-loader__2" />
                <span className="jkl-loader__3" />
            </span>
        </div>
    );
};

ReactDOM.render(<Loaders />, document.getElementById("app"));
