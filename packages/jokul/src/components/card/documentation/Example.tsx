import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./examples/cardExampleProps";
import { FakturainfoExample, fakturainfoExampleProps } from "./examples/FakturainfoExample";
import { InfoCardExample } from "./examples/InfoCardExample";
import { NavCardExample } from "./examples/NavCardExample";
import { StatuskortExample, statuskortExampleProps } from "./examples/StatuskortExample";
import { TaskCardExample } from "./examples/TaskCardExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./info-card-example.scss";
import "./task-card-example.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="Informasjon om forfalt faktura"
                knobs={fakturainfoExampleProps}
                component={FakturainfoExample}
            />
            <DevExample title="Statuskort for skadesak" knobs={statuskortExampleProps} component={StatuskortExample} />
            <DevExample title="NavCard" knobs={navCardExampleProps} component={NavCardExample} />
            <DevExample title="InfoCard" knobs={infoCardExampleProps} component={InfoCardExample} />
            <DevExample title="TaskCard" knobs={taskCardExampleProps} component={TaskCardExample} />
        </>
    );
}
