import React from "react";
import ReactDOM from "react-dom";
import "../dropdown.scss";

const testdata = [
    'Frem',
    'Tind',
    'Fremtind',
    'Jøkkkul'
];

const App = () => (
    <select className="jkl-dropdown">
        {testdata.map(data => <option>{data}</option>)}
    </select>
);

ReactDOM.render(<App />, document.getElementById("app"));
