import React from "react";
import ReactDOM from "react-dom";
import { RadioButtonChoice } from "../src/RadioButtonChoice";
import "@fremtind/jkl-radio-button";

const choices = ["Yes", "No", "I don't know"];

const Demo = () => {
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    return (
        <RadioButtonChoice
            legend="Do you like radio buttons?"
            name="likesradiobuttons"
            choices={choices}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        />
    );
};

ReactDOM.render(<Demo />, document.getElementById("app"));
