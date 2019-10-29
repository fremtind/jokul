import React from "react";
import ReactDOM from "react-dom";
import { ActionIcon } from "../src";
import "./index.scss";

const App = () => (
    <>
        <ActionIcon actionType="delete" />
        <ActionIcon actionType="edit" />
        <ActionIcon actionType="search" />
        <ActionIcon actionType="clear" />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
