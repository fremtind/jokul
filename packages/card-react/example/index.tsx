import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../src";

const Sample = () => (
    <Card>
        <h1>Heading</h1>
        <p>
            For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to think of going
            indoors when, all at once, the car burst into the pure and starlit region of the upper air.
        </p>
    </Card>
);

ReactDOM.render(<Sample />, document.getElementById("app"));
