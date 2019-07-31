import React from "react";
import { Example } from "../components";
import { Card } from "@fremtind/jkl-card-react";
import "@fremtind/jkl-card/card.min.css";
import "@fremtind/jkl-core/core.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-card-react/build/Card.d.ts";

const example = `<Card>
    <h3 className="jkl-h3">Heading</h3>
    <p className="jkl-p">
        For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to think of going
        indoors when, all at once, the car burst into the pure and starlit region of the upper air.
    </p>
</Card>`;

const exampleImport = `import { Card } from "@fremtind/jkl-card-react";
import "@fremtind/jkl-card/card.min.css";`;

const CheckboxExample = () => (
    <Example exampleComponents={{ Card }} exampleCode={example} type={type} exampleImport={exampleImport} />
);

export default CheckboxExample;
