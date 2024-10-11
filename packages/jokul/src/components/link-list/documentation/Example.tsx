import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { OrderedLinkListExample, UnorderedLinkListExample, knobs } from "./LinkListExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={OrderedLinkListExample} knobs={knobs} />;
            <DevExample component={UnorderedLinkListExample} knobs={knobs} />;
        </>
    );
}
