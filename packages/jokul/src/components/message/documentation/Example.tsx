import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { FormErrorMessageExample, formErrorMessageKnobs } from "./FormErrorMessageExample";
import { MessageExample, messageExampleKnobs } from "./MessageExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={MessageExample} knobs={messageExampleKnobs} />
            <DevExample component={FormErrorMessageExample} knobs={formErrorMessageKnobs} />
        </>
    );
}
