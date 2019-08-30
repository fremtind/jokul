import "@fremtind/jkl-core/core.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "../src";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-core/normalize.css";

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
    <>
        <div style={{ margin: "20px" }}>
            <DatePicker />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker
                initialDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                months={englishMonthNames}
                days={englishDayNames}
            />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker onChange={(date) => alert(`Date selected is ${date}`)} helpLabel={"Choose visely"} />
        </div>
        <div style={{ margin: "20px" }}>
            <DatePicker
                label="Select the best date"
                yearLabel="1988 is good"
                monthLabel="Try september"
                onChange={(date) => {
                    if (date.toDateString() === "Mon Sep 26 1988") {
                        alert("The greatest date is selected");
                    }
                }}
                errorLabel={"Not the best date"}
            />
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
