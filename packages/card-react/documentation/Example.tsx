import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./cardExampleProps";
import { InfoCardExample } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import { TaskCardExample } from "./TaskCardExample";
import "../../card/card.scss";
import "../../button/button.scss";
import "../../checkbox/checkbox.scss";
import "../../image/image.scss";
import "../../select/select.scss";
import "../../tag/tag.scss";
import "./info-card-example.scss";
import "./task-card-example.scss";

export default function Example() {
    return (
        <>
            <DevExample knobs={navCardExampleProps} component={NavCardExample} codeExample={navCardExampleCode} />
            <DevExample knobs={infoCardExampleProps} component={InfoCardExample} />
            <DevExample knobs={taskCardExampleProps} component={TaskCardExample} />
        </>
    );
}
