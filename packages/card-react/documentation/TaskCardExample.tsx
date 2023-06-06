import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Checkbox } from "../../checkbox-react/src";
import { FieldGroup } from "../../input-group-react/src";
import { useAnimatedHeight } from "../../react-hooks";
import { Select } from "../../select-react/src";
import { TaskCard } from "../src/TaskCard";
import { mixedPadding } from "./cardExampleProps";

import "./task-card-example.scss";

export const TaskCardExample: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const [selected, setSelected] = useState(false);
    const [contentRef] = useAnimatedHeight<HTMLDivElement>(selected);

    const paddingChoice = (choiceValues?.["Padding"] as "0" | "16" | "24" | "40" | "blandet") || "24";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;

    return (
        <TaskCard bgColor={selected ? "hvit" : "dis"} withShadow={selected} padding={padding}>
            <Checkbox
                id="veterinar-checkbox"
                aria-controls="expanded-content"
                aria-expanded={selected}
                name="veterinar"
                value="veterinar"
                onChange={() => setSelected((selected) => !selected)}
            >
                Veterinærutgifter
            </Checkbox>
            <p className="jkl-body jkl-spacing-12--top">
                Dekker veterinærutgifter og medisiner på resept, som ofte kan bli dyrt.
            </p>
            <div
                id="expanded-content"
                aria-labelledby="veterinar-checkbox"
                role="group"
                className="jkl-task-card-example__content"
                hidden={!selected}
                ref={contentRef}
            >
                <Select
                    label="Forsikringssum"
                    name="forsikringssum"
                    className="jkl-spacing-40--top"
                    items={["10 000 kr", "20 000 kr", "30 000 kr"]}
                />
                <Select
                    label="Velg egenandel"
                    name="egenandel"
                    className="jkl-spacing-24--top"
                    items={["1 500 kr", "2 500 kr", "3 000 kr"]}
                />
                <FieldGroup className="jkl-spacing-24--top" legend="Tilleggsforsikring">
                    <Checkbox name="tilleggsforsikring" value="rehab">
                        Dekning av rehabilitering
                    </Checkbox>
                </FieldGroup>
                <p className="jkl-body jkl-spacing-40--top">
                    Dersom du ønsker ekstra forsikring av valpekull, må du ta kontakt med en rådgiver.
                </p>
            </div>
        </TaskCard>
    );
};

export const taskCardExampleCode = ({ choiceValues }: ExampleComponentProps) => {
    const paddingChoice = choiceValues?.["Padding"] || "24";
    const padding =
        paddingChoice === "blandet"
            ? `{{
        top: "64",
        right: "40",
        bottom: "16",
        left: "24",
    }}`
            : `"${paddingChoice}"`;

    return `const [selected, setSelected] = useState(false);
const [contentRef] = useAnimatedHeight<HTMLDivElement>(selected);

return (
    <TaskCard bgColor={selected ? "hvit" : "dis"} withShadow={selected} padding=${padding}>
        <Checkbox
            id="veterinar-checkbox"
            aria-controls="veterinar-expanded-content"
            aria-expanded={selected}
            name="veterinar"
            value="veterinar"
            onChange={() => setSelected((selected) => !selected)}
        >
            Veterinærutgifter
        </Checkbox>
        <p className="jkl-body jkl-spacing-12--top">
            Dekker veterinærutgifter og medisiner på resept, som ofte kan bli dyrt.
        </p>
        <div
            id="veterinar-expanded-content"
            aria-labelledby="veterinar-checkbox"
            role="group"
            className="jkl-task-card-example__content"
            hidden={!selected}
            ref={contentRef}
        >
            <Select
                label="Forsikringssum"
                name="forsikringssum"
                className="jkl-spacing-40--top"
                items={["10 000 kr", "20 000 kr", "30 000 kr"]}
            />
            <Select
                label="Velg egenandel"
                name="egenandel"
                className="jkl-spacing-24--top"
                items={["1 500 kr", "2 500 kr", "3 000 kr"]}
            />
            <FieldGroup className="jkl-spacing-24--top" legend="Tilleggsforsikring">
                <Checkbox name="tilleggsforsikring" value="rehab">
                    Dekning av rehabilitering
                </Checkbox>
            </FieldGroup>
            <p className="jkl-body jkl-spacing-40--top">
                Dersom du ønsker ekstra forsikring av valpekull, må du ta kontakt med en rådgiver.
            </p>
        </div>
    </TaskCard>
);`;
};
