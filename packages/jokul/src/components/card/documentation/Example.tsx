import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs as fakturaInfoKnobs } from "./examples/FakturainfoExample";
import FakturainfoExample from "./examples/FakturainfoExample?raw";
// @ts-ignore
import { knobs as infoCardKnobs } from "./examples/InfoCardExample";
import InfoCardExample from "./examples/InfoCardExample?raw";
// @ts-ignore
import { knobs as navCardKnobs } from "./examples/NavCardExample";
import NavCardExample from "./examples/NavCardExample?raw";
// @ts-ignore
import { knobs as statuskortKnobs } from "./examples/StatuskortExample";
import StatuskortExample from "./examples/StatuskortExample?raw";
// @ts-ignore
import { knobs as taskCardKnobs } from "./examples/TaskCardExample";
import TaskCardExample from "./examples/TaskCardExample?raw";

import "../styles/_index.scss";
import "./info-card-example.scss";
import "./task-card-example.scss";

const fakturaInfoCode = formatCode(FakturainfoExample);
const statuskortCode = formatCode(StatuskortExample);
const navCardCode = formatCode(NavCardExample);
const infoCardCode = formatCode(InfoCardExample);
const taskCardCode = formatCode(TaskCardExample);

export default function Example() {
    const fakturaInfoControls = useInteractiveCodeControls(fakturaInfoCode, fakturaInfoKnobs);
    const statuskortControls = useInteractiveCodeControls(statuskortCode, statuskortKnobs);
    const navCardControls = useInteractiveCodeControls(navCardCode, navCardKnobs);
    const infoCardControls = useInteractiveCodeControls(infoCardCode, infoCardKnobs);
    const taskCardControls = useInteractiveCodeControls(taskCardCode, taskCardKnobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Informasjon om forfalt faktura"}
                defaultCode={fakturaInfoCode}
                defaultShowEditor={true}
                noInline={true}
                controls={fakturaInfoControls}
            />
            <InteractiveCode
                title={"Statuskort for skadesak"}
                defaultCode={statuskortCode}
                defaultShowEditor={true}
                noInline={true}
                controls={statuskortControls}
            />
            <InteractiveCode
                title={"NavCard"}
                defaultCode={navCardCode}
                defaultShowEditor={true}
                noInline={true}
                controls={navCardControls}
            />
            <InteractiveCode
                title={"InfoCard"}
                defaultCode={infoCardCode}
                defaultShowEditor={true}
                noInline={true}
                controls={infoCardControls}
            />
            <InteractiveCode
                title={"TaskCard"}
                defaultCode={taskCardCode}
                defaultShowEditor={true}
                noInline={true}
                controls={taskCardControls}
            />
            {/*

            <DevExample
                title="TaskCard"
                knobs={taskCardExampleProps}
                component={TaskCardExample}
                codeExample={taskCardExampleCode}
            />
            */}
        </div>
    );
}
