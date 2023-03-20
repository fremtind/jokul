import React from "react";
import { DevExample } from "../../../doc-utils";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./cardExampleProps";
import { InfoCardExample, infoCardExampleCode } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import { TaskCardExample, taskCardExampleCode } from "./TaskCardExample";
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
            <DevExample
                title="NavCard"
                knobs={navCardExampleProps}
                component={NavCardExample}
                codeExample={navCardExampleCode}
            />
            <DevExample
                title="InfoCard"
                knobs={infoCardExampleProps}
                component={InfoCardExample}
                codeExample={infoCardExampleCode}
            />
            <DevExample
                title="TaskCard"
                knobs={taskCardExampleProps}
                component={TaskCardExample}
                codeExample={taskCardExampleCode}
            />
        </>
    );
}
