import React from "react";
import ReactDOM from "react-dom";
import "../inline-loader.scss";

const Loaders = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <span className="jkl-inline-loader">
                <span className="jkl-inline-loader__1" />
                <span className="jkl-inline-loader__2" />
                <span className="jkl-inline-loader__3" />
            </span>
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<Loaders />, mountNode);
