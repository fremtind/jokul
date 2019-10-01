import React from "react";
import ReactDOM from "react-dom";
import { FieldGroup } from "../src/index";

const FieldGroupExample = () => (
    <div className="form-section">
        <h2 className="jkl-h3 form-section__header">Livsstil og helse</h2>
        <FieldGroup className="jkl-spacing--bottom-3" legend="Har du bodd fast i Norge de siste 5 årene?">
            <p className="jkl-lead">
                Du trenger ikke ta hensyn til korte utenlandsopphold på grunn av studier eller feriereiser når du skal
                svare på spørsmålet.
            </p>
            <p className="jkl-p">
                <strong>[Felt settes inn her]</strong>
            </p>
        </FieldGroup>
        <FieldGroup variant="secondary" legend="Hvor bodde du før du flyttet til Norge?">
            <p className="jkl-p">
                <strong>[Velg land her]</strong>
            </p>
        </FieldGroup>
        <FieldGroup variant="small" legend="Hvor bodde du før du flyttet til Norge?">
            <p className="jkl-p">
                <strong>[Velg land her]</strong>
            </p>
        </FieldGroup>
    </div>
);

ReactDOM.render(<FieldGroupExample />, document.getElementById("app"));
