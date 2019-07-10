//import "@fremtind/jkl-DatePicker/DatePicker.css";
import "@fremtind/jkl-core/build/css/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "../src";
import "../src/datepicker.scss";
import "@fremtind/jkl-core/build/css/normalize.css";
import "@fremtind/jkl-text-input/text-input.css";

const App = () => (
    <>
        <div style={{ margin: "20px" }}>
            <DatePicker />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker
                onlyFuture={false}
                initialDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker onChange={(date) => alert(`Date selected is ${date}`)} />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker
                onlyFuture={false}
                label="Select the best date"
                yearLabel="1988 is good"
                monthLabel="Try september"
                onChange={(date) => {
                    if (date.toDateString() === "Mon Sep 26 1988") {
                        alert("The greatest date is selected");
                    }
                }}
            />
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
