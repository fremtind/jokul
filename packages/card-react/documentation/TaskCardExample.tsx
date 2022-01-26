import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";

import { Checkbox } from "../../checkbox-react/src";
import { Select } from "../../select-react/src";
import { FieldGroup } from "../../field-group-react/src";
import { useAnimatedHeight } from "../../react-hooks";
import { TaskCard } from "../src/TaskCard";
import { SpacingStep } from "../src/types";

import "./task-card-example.scss";

export const TaskCardExample: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const [selected, setSelected] = useState(false);
    const [contentRef] = useAnimatedHeight<HTMLDivElement>(selected);

    const padding = (choiceValues?.["Padding"] as "m" | "l" | "xl") || "l";
    const topPadding =
        choiceValues?.["Top Padding"] === "auto" ? undefined : (choiceValues?.["Top Padding"] as SpacingStep);

    return (
        <>
            <TaskCard bgColor={selected ? "hvit" : "dis"} shadow={selected} padding={padding} topPadding={topPadding}>
                <Checkbox name="veterinar" value="veterinar" onChange={() => setSelected((sel) => !sel)}>
                    Veterinærutgifter
                </Checkbox>
                <p className="jkl-body jkl-spacing-s--top">
                    Dekker veterinærutgifter og medisiner på resept, som ofte kan bli dyrt.
                </p>
                <div className="jkl-task-card-example__content" hidden={!selected} ref={contentRef}>
                    <Select
                        label="Forsikringssum"
                        name="forsikringssum"
                        className="jkl-spacing-xl--top"
                        items={["10 000 kr", "20 000 kr", "30 000 kr"]}
                    />
                    <Select
                        label="Velg egenandel"
                        name="egenandel"
                        className="jkl-spacing-l--top"
                        items={["1 500 kr", "2 500 kr", "3 000 kr"]}
                    />
                    <FieldGroup className="jkl-spacing-l--top" legend="Tilleggsforsikring">
                        <Checkbox name="tilleggsforsikring" value="rehab">
                            Dekning av rehabilitering
                        </Checkbox>
                    </FieldGroup>
                    <p className="jkl-body jkl-spacing-xl--top">
                        Dersom du ønsker ekstra forsikring av valpekull, må du ta kontakt med en rådgiver.
                    </p>
                </div>
            </TaskCard>
        </>
    );
};
