import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    ContactInformationExample,
    contactInformationExampleCode,
    contactInformationExampleKnobs,
} from "./ContactInformationExample";
import "../../contact-information/contact-information.scss";

export default function Example() {
    return (
        <DevExample
            scrollable={true}
            component={ContactInformationExample}
            knobs={contactInformationExampleKnobs}
            codeExample={contactInformationExampleCode}
        />
    );
}
