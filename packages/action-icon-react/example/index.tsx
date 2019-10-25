import React from "react";
import ReactDOM from "react-dom";
import { ActionIcon } from "../src";
import "./index.scss";

const App = () => (
    <>
        <ActionIcon action="delete" />
        <ActionIcon action="edit" />
        <ActionIcon action="search" />
        <ActionIcon action="clear" />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
