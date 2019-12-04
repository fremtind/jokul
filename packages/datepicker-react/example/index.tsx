import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-core/normalize.css";

initTabListener();

const englishMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const englishDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const App = () => (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
        <div className="jkl-spacing--all-3">
            <DatePicker extended />
        </div>
        <div className="jkl-spacing--all-3">
            <DatePicker
                variant="large"
                initialDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                months={englishMonthNames}
                days={englishDayNames}
            />
        </div>
        <div className="jkl-spacing--all-3">
            <DatePicker
                variant="small"
                onChange={(date) => console.log(`Date selected is ${date}`)}
                helpLabel={"Choose wisely"}
            />
        </div>
        <div className="jkl-spacing--all-3">
            <DatePicker
                extended
                label="Select the best date"
                yearLabel="1988 is good"
                monthLabel="Try september"
                onChange={(date) => {
                    if (date.toDateString() === "Mon Sep 26 1988") {
                        console.log("The greatest date is selected");
                    }
                }}
                errorLabel={"Not the best date"}
            />
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
