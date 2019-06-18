import React from "react";
import ReactDOM from "react-dom";
import "./radio-button.scss";

const Demo = () => (
    <>
        <span className="jkl-radio-button">
            <input className="jkl-radio-button__input" type="radio" value="yes" name="somechoice" id="yes" />
            <label className="jkl-radio-button__label" htmlFor="yes">
                Yes
            </label>
        </span>
        <span className="jkl-radio-button">
            <input className="jkl-radio-button__input" type="radio" value="no" name="somechoice" id="no" />
            <label className="jkl-radio-button__label" htmlFor="no">
                No
            </label>
        </span>
    </>
);

ReactDOM.render(<Demo />, document.getElementById("app"));
