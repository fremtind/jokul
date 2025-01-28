import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useState, useEffect } from "react";
import { Chip } from "../Chip.js";

type ChipVariant = "input" | "filter";

export const chipExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Variant",
            values: ["input", "filter"],
            defaultValue: 0,
        },
        {
            name: "Size",
            values: ["small", "large"],
            defaultValue: 0,
        },
    ],
};

const chipInputLabels = [
    "Bil",
    "Innbø",
    "Reise",
    "Ulykke",
    "Helse",
    "Hus",
    "Fritid",
    "Ansvar",
];

const initialFilterOptions = [
    { title: "Påkjørsel bakfra", selected: false },
    { title: "Kjedekollisjon", selected: false },
    { title: "Kollisjon i kryss", selected: false },
    { title: "Møtekollisjon", selected: true },
    { title: "Kollisjon i rundkjøring", selected: false },
    { title: "Rygging", selected: false },
    { title: "Feltskifte", selected: false },
    { title: "Forbikjøring", selected: false },
    { title: "Ingen av disse", selected: false },
];

const ExampleChipWrapper: React.FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const variant = choiceValues?.["Variant"] as ChipVariant;
    const size = choiceValues?.["Size"] as "small" | "large";

    const [inputDismissed, setInputDismissed] = useState<boolean[]>(
        Array(chipInputLabels.length).fill(false),
    );
    const [chipFilterOptions, setChipFilterOptions] =
        useState(initialFilterOptions);

    const handleClick = (index: number) => {
        if (variant === "input") {
            const updatedDismissed = [...inputDismissed];
            updatedDismissed[index] = true;
            setInputDismissed(updatedDismissed);
        } else {
            const updatedOptions = [...chipFilterOptions];
            updatedOptions[index].selected = !updatedOptions[index].selected;
            setChipFilterOptions(updatedOptions);
        }
    };

    useEffect(() => {
        if (inputDismissed.every((status) => status)) {
            setTimeout(
                () =>
                    setInputDismissed(
                        Array(chipInputLabels.length).fill(false),
                    ),
                1000,
            );
        }
    }, [inputDismissed]);

    return (
        <div className="flex flex-wrap gap-12" style={{ maxWidth: "500px" }}>
            {variant === "filter"
                ? chipFilterOptions.map((option, index) => (
                      <Chip
                          key={option.title}
                          variant="filter"
                          onClick={() => handleClick(index)}
                          selected={option.selected}
                          size={size}
                      >
                          {option.title}
                      </Chip>
                  ))
                : chipInputLabels.map(
                      (label, index) =>
                          !inputDismissed[index] && (
                              <Chip
                                  key={label}
                                  variant="input"
                                  onClick={() => handleClick(index)}
                                  size={size}
                              >
                                  {label}
                              </Chip>
                          ),
                  )}
        </div>
    );
};

export const ChipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    return <ExampleChipWrapper choiceValues={choiceValues} />;
};
