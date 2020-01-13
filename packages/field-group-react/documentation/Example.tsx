import React from "react";
import { FieldGroup } from "../src/index";
import "./index.scss";

const Example = () => (
    <section className="form-section">
        <h2 className="jkl-h3 form-section__header">Livsstil og helse</h2>
        <FieldGroup
            variant="large"
            className="jkl-spacing--bottom-3"
            legend="Har du bodd fast i Norge de siste 5 årene?"
        >
            <p className="jkl-lead">
                Du trenger ikke ta hensyn til korte utenlandsopphold på grunn av studier eller feriereiser når du skal
                svare på spørsmålet.
            </p>
            <p className="jkl-body">
                <strong>[Felt settes inn her]</strong>
            </p>
        </FieldGroup>
        <FieldGroup legend="Hvor bodde du før du flyttet til Norge?">
            <p className="jkl-body">
                <strong>[Velg land her]</strong>
            </p>
        </FieldGroup>
        <FieldGroup variant="small" forceCompact legend="Hvor bodde du før du flyttet til Norge?">
            <p className="jkl-body">
                <strong>[Velg land her]</strong>
            </p>
        </FieldGroup>
    </section>
);

export default Example;
