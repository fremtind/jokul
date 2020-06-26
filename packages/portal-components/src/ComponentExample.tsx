import React, { createElement, useState, useLayoutEffect } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Dictionary, ExampleComponentProps, ChoiceProp } from "../src";

export interface Props {
    component: React.FC<ExampleComponentProps>;
    knobs?: {
        boolProps?: Array<string>;
        choiceProps?: Array<ChoiceProp>;
    };
}

export function ComponentExample({ component, knobs }: Props) {
    const [uid] = useState(`example${nanoid(8)}`);
    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>({});
    const [choices, setChoices] = useState<Dictionary<string[]>>({});
    const [choiceValues, setChoiceValues] = useState<Dictionary<string>>({});
    const [theme, setTheme] = useState("light");
    useLayoutEffect(() => {
        const defaultChoices: Dictionary<string[]> = {};
        const defaultBoolValues: Dictionary<boolean> = {};
        const defaultChoiceValues: Dictionary<string> = {};
        if (knobs && knobs.boolProps) {
            knobs.boolProps.forEach((prop) => {
                defaultBoolValues[prop] = false;
            });
        }
        if (knobs && knobs.choiceProps) {
            knobs.choiceProps.forEach((prop) => {
                defaultChoiceValues[prop.name] = prop.values[prop.defaultValue];
                defaultChoices[prop.name] = prop.values;
            });
        }
        setChoices({ ...defaultChoices });
        setBoolValues({ ...defaultBoolValues });
        setChoiceValues({ ...defaultChoiceValues });
    }, [knobs]);
    const setBoolValue = (key: string, value: boolean) => {
        if (key.toLowerCase() === "inverted" || key.toLowerCase() === "invertert") {
            setTheme(value ? "dark" : "light");
        }
        const boolValuesCopy = boolValues;
        boolValuesCopy[key] = value;
        setBoolValues({ ...boolValuesCopy });
    };
    const setChoiceValue = (key: string, value: string) => {
        const choiceValuesCopy = choiceValues;
        choiceValuesCopy[key] = value;
        setChoiceValues({ ...choiceValuesCopy });
    };
    const wrapperClassName = classNames({
        "jkl-portal-component-example__example-wrapper": true,
        "jkl-portal-component-example__example-wrapper--dark": theme === "dark",
    });

    return (
        <>
            <section className="jkl-portal-component-example">
                <div data-theme={theme} className={wrapperClassName} data-example-text="Komponent">
                    {createElement(component, { boolValues, choiceValues })}
                </div>
                {(knobs?.boolProps || knobs?.choiceProps) && (
                    <aside data-compactlayout={true} className="jkl-portal-component-example__example-options">
                        <p className="jkl-portal-component-example__example-options-header">Egenskaper</p>
                        {Object.entries(boolValues).map(([key, value]) => (
                            <Checkbox
                                key={key}
                                name={`${uid}-${key}`}
                                value={key}
                                checked={value}
                                onChange={(e) => setBoolValue(key, e.target.checked)}
                            >
                                {key}
                            </Checkbox>
                        ))}
                        {Object.entries(choiceValues).map(([key, value]) => {
                            return (
                                <RadioButtons
                                    className="jkl-portal-component-example__choice-option"
                                    variant="small"
                                    key={key}
                                    name={`${uid}-${key}`}
                                    legend={key}
                                    choices={[...choices[key]]}
                                    selectedValue={value}
                                    onChange={(e) => setChoiceValue(key, e.target.value)}
                                />
                            );
                        })}
                    </aside>
                )}
            </section>
        </>
    );
}
