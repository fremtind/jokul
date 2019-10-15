import "@fremtind/jkl-icon/icon.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "../src";

const App = () => (
    <div>
        <Icon name="edit" />
        <Icon name="delete" />
        <Icon name="search" />
        <Icon name="clear" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
