import "@fremtind/jkl-autosuggest/autosuggest.min.css";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import ObjectsAutosuggest from "./ObjectsAutosuggest";
import StringsAutosuggest from "./StringsAutosuggest";

const Example = () => (
    <div className="container">
        <div>
            <h1>Object items</h1>
            <ObjectsAutosuggest />
        </div>
        <div>
            <h1>String items</h1>
            <StringsAutosuggest exampleType="STRING_ITEMS" />
        </div>
        <div>
            <h1>Typeahed</h1>
            <StringsAutosuggest exampleType="TYPEAHED" />
        </div>
        <div>
            <h1>Error state</h1>
            <StringsAutosuggest exampleType="ERROR_STATE" />
        </div>
        <div>
            <h1>Custom label</h1>
            <StringsAutosuggest exampleType="CUSTOM_LABEL" />
        </div>
    </div>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Example />, mountNode);
