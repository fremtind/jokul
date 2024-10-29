import React from "react";
import { DevExample } from "../../../doc-utils";
import "../../button/button.scss";
import "../../card/card.scss";
import "../../checkbox/checkbox.scss";
import "../../image/image.scss";
import "../../select/select.scss";
import "../../tag/tag.scss";
import {
    infoCardExampleProps,
    navCardExampleProps,
    taskCardExampleProps,
} from "./cardExampleProps";
import {
    FakturainfoExample,
    fakturainfoExampleCode,
    fakturainfoExampleProps,
} from "./FakturainfoExample";
import "./info-card-example.scss";
import { InfoCardExample, infoCardExampleCode } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import {
    StatuskortExample,
    statuskortExampleCode,
    statuskortExampleProps,
} from "./StatuskortExample";
import "./task-card-example.scss";
import { TaskCardExample, taskCardExampleCode } from "./TaskCardExample";

export default function Example() {
    return (
        <>
            <DevExample
                title="Informasjon om forfalt faktura"
                knobs={fakturainfoExampleProps}
                component={FakturainfoExample}
                codeExample={fakturainfoExampleCode}
            />
            <DevExample
                title="Statuskort for skadesak"
                knobs={statuskortExampleProps}
                component={StatuskortExample}
                codeExample={statuskortExampleCode}
            />
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
