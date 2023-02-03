import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    ContactInformationExample,
    contactInformationExampleCode,
    contactInformationExampleKnobs,
} from "./ContactInformationExample";
import "../../footer/contact-information.scss";

export default function Example() {
    return (
        <DevExample
            component={ContactInformationExample}
            knobs={contactInformationExampleKnobs}
            codeExample={contactInformationExampleCode}
        />
    );
}
