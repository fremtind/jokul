import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./examples/cardExampleProps.js";
import { FakturainfoExample, fakturainfoExampleProps } from "./examples/FakturainfoExample.js";
import { InfoCardExample } from "./examples/InfoCardExample.js";
import { NavCardExample } from "./examples/NavCardExample.js";
import { StatuskortExample, statuskortExampleProps } from "./examples/StatuskortExample.js";
import { TaskCardExample } from "./examples/TaskCardExample.js";

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
