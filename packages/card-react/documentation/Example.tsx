import React from "react";
import { DevExample } from "../../../doc-utils";
import { InfoCardExample } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import { TaskCardExample } from "./TaskCardExample";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./cardExampleProps";
import "../../card/card.scss";
import "../../button/button.scss";
import "../../checkbox/checkbox.scss";
import "../../image/image.scss";
import "../../select/select.scss";
import "../../tag/tag.scss";
import "./info-card-example.scss";
import "./task-card-example.scss";

export default function Client() {
    return (
        <>
            <DevExample knobs={navCardExampleProps} component={NavCardExample} codeExample={navCardExampleCode} />
            <DevExample knobs={infoCardExampleProps} component={InfoCardExample} />
            <DevExample knobs={taskCardExampleProps} component={TaskCardExample} />
        </>
    );
}
