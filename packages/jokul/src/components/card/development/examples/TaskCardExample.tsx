import type { ExampleComponentProps } from "utils/dev-example/index.js";
import React, { useState } from "react";
import { useAnimatedHeight } from "../../../../hooks/index.js";
import { Checkbox } from "../../../checkbox/Checkbox.js";
import { FieldGroup } from "../../../input-group/FieldGroup.js";
import { Select } from "../../../select/Select.js";
import { TaskCard } from "../../TaskCard.js";
import { mixedPadding } from "./cardExampleProps.js";

export const TaskCardExample: React.FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const [selected, setSelected] = useState(false);
    const [contentRef] = useAnimatedHeight<HTMLFieldSetElement>(selected);

    const paddingChoice =
        (choiceValues?.["Padding"] as "0" | "16" | "24" | "40" | "blandet") ||
        "24";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;

    return (
        <TaskCard
            background={selected ? "highlighted" : "subdued"}
            withShadow={selected}
            padding={padding}
        >
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
                Dekker veterinærutgifter og medisiner på resept, som ofte kan
                bli dyrt.
            </p>
            <fieldset
                id="expanded-content"
                aria-labelledby="veterinar-checkbox"
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
                <FieldGroup
                    className="jkl-spacing-24--top"
                    legend="Tilleggsforsikring"
                >
                    <Checkbox name="tilleggsforsikring" value="rehab">
                        Dekning av rehabilitering
                    </Checkbox>
                </FieldGroup>
                <p className="jkl-body jkl-spacing-40--top">
                    Dersom du ønsker ekstra forsikring av valpekull, må du ta
                    kontakt med en rådgiver.
                </p>
            </fieldset>
        </TaskCard>
    );
};
