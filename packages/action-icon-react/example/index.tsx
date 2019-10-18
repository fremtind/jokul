import React from "react";
import ReactDOM from "react-dom";
import { DeleteActionIcon, EditActionIcon, SearchActionIcon, ClearActionIcon } from "../src";

const App = () => (
    <>
        <EditActionIcon />
        <DeleteActionIcon />
        <SearchActionIcon />
        <ClearActionIcon />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
