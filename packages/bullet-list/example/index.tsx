import React from "react";
import ReactDOM from "react-dom";
import "../bullet-list.scss";

const App = () => (
    <>
        <ul className="jkl-bullet-list">
            <li className="jkl-bullet-list__item">Oh hi Mark</li>
            <li className="jkl-bullet-list__item">Oh hi Johnny</li>
            <li className="jkl-bullet-list__item">How is your life</li>
            <li className="jkl-bullet-list__item--nested">Oh, yeah, nice</li>
        </ul>
        <ul className="jkl-bullet-list--lead">
            <li className="jkl-bullet-list__item">Oh hi Mark</li>
            <li className="jkl-bullet-list__item">Oh hi Johnny</li>
            <li className="jkl-bullet-list__item">How is your life</li>
            <li className="jkl-bullet-list__item--nested">Oh, yeah, nice</li>
        </ul>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
