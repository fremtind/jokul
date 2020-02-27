import React, { createElement, useState, useLayoutEffect, useEffect } from "react";
import classNames from "classnames";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Dictionary, ExampleComponentProps, ChoiceProp } from ".";

interface Props extends ExampleComponentProps {
    component: React.FC<ExampleComponentProps>;
    knobs?: {
        boolProps?: Array<string>;
        choiceProps?: Array<ChoiceProp>;
    };
}
export function ComponentExample({ component, knobs }: Props) {
    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>({});
    const [choices, setChoices] = useState<Dictionary<string[]>>({});
    const [choiceValues, setChoiceValues] = useState<Dictionary<string>>({});
    const [darkBackground, setDarkBackground] = useState(false);
    useEffect(() => {
        console.log(choiceValues);
    }, [choiceValues]);
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
            setDarkBackground(value);
        }
        const boolValuesCopy = boolValues;
        boolValuesCopy[key] = value;
        setBoolValues({ ...boolValuesCopy });
    };
    const setChoiceValue = (key: string, value: string) => {
        console.log("Setting choice value");
        const choiceValuesCopy = choiceValues;
        choiceValuesCopy[key] = value;
        console.log(choiceValuesCopy);
        setChoiceValues({ ...choiceValuesCopy });
    };
    const wrapperClassName = classNames({
        "jkl-portal-component-example__example-wrapper": true,
        "jkl-portal-component-example__example-wrapper--dark": darkBackground,
    });

    return (
        <section className="jkl-portal-component-example">
            <div className={wrapperClassName}>{createElement(component, { boolValues, choiceValues })}</div>
            <aside data-compactlayout={true} className="jkl-portal-component-example__example-options">
                {Object.entries(boolValues).map(([key, value]) => (
                    <Checkbox
                        key={key}
                        name={key}
                        value={key}
                        checked={value}
                        onChange={(e) => setBoolValue(key, e.target.checked)}
                    >
                        {key}
                    </Checkbox>
                ))}
                {Object.entries(choiceValues).map(([key, value]) => {
                    //console.log(choiceValues, value);
                    return (
                        <RadioButtons
                            className="jkl-portal-component-example__choice-option"
                            variant="small"
                            key={key}
                            name={key}
                            legend={key}
                            choices={[...choices[key]]}
                            selectedValue={value}
                            onChange={(e) => setChoiceValue(key, e.target.value)}
                        />
                    );
                })}
            </aside>
        </section>
    );
}
