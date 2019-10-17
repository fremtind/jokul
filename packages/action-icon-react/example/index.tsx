import React from "react";
import ReactDOM from "react-dom";
import { ActionIcon } from "../src";

const App = () => (
    <div>
        <ActionIcon name="edit" />
        <ActionIcon name="delete" />
        <ActionIcon name="search" />
        <ActionIcon name="clear" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
