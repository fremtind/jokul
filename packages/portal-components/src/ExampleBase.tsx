import React, { useState, useLayoutEffect } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Dictionary, ChoiceProp, ExampleComponentProps } from "../src";
import { hyphenate } from "./internal/hypenate";

export interface Props {
    component: React.FC<ExampleComponentProps>;
    title?: string;
    knobs?: {
        boolProps?: Array<string>;
        choiceProps?: Array<ChoiceProp>;
    };
    responsiveLayout: boolean;
}

export const ExampleBase: React.FC<Props> = ({ responsiveLayout, component, knobs, title = "Komponent" }) => {
    const [uid] = useState(`example-${nanoid(8)}`);
    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>({});
    const [choices, setChoices] = useState<Dictionary<string[]>>({});
    const [choiceValues, setChoiceValues] = useState<Dictionary<string>>({});
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useLayoutEffect(() => {
        setBoolValues(knobs?.boolProps?.reduce((acc, boolProp) => ({ ...acc, [boolProp]: false }), {}) || {});
        setChoices(knobs?.choiceProps?.reduce((acc, { name, values }) => ({ ...acc, [name]: values }), {}) || {});
        setChoiceValues(
            knobs?.choiceProps?.reduce(
                (acc, { name, values, defaultValue }) => ({
                    ...acc,
                    [name]: values[defaultValue],
                }),
                {},
            ) || {},
        );
    }, [knobs]);

    const setBoolValue = (key: string, value: boolean) => setBoolValues({ ...boolValues, [key]: value });
    const setChoiceValue = (key: string, value: string) => setChoiceValues({ ...choiceValues, [key]: value });

    const C = component;

    return (
        <section className={responsiveLayout ? "jkl-portal-responsive-example" : "jkl-portal-component-example"}>
            <div
                data-theme={theme}
                data-example-text={title}
                className={classNames("jkl-portal-component-example__example-wrapper", {
                    "jkl-portal-component-example__example-wrapper--dark": theme === "dark",
                })}
            >
                <C boolValues={boolValues} choiceValues={choiceValues} />
            </div>
            {(knobs?.boolProps || knobs?.choiceProps) && (
                <aside data-compactlayout={true} className="jkl-portal-component-example__example-options">
                    <p className="jkl-portal-component-example__example-options-header">Egenskaper</p>
                    {Object.entries(boolValues).map(([key, value]) => (
                        <Checkbox
                            key={key}
                            name={`${uid}-${hyphenate(key)}`}
                            value={key}
                            checked={value}
                            onChange={(e) => setBoolValue(key, e.target.checked)}
                        >
                            {key}
                        </Checkbox>
                    ))}
                    {Object.entries(choiceValues).map(([key, value]) => (
                        <RadioButtons
                            className="jkl-portal-component-example__choice-option"
                            variant="small"
                            key={key}
                            name={`${uid}-${hyphenate(key)}`}
                            legend={key}
                            choices={[...choices[key]]}
                            selectedValue={value}
                            onChange={(e) => setChoiceValue(key, e.target.value)}
                        />
                    ))}
                    <p className="jkl-portal-component-example__example-options-header jkl-layout-spacing--small-top">
                        Visning
                    </p>
                    <Checkbox
                        name={`${uid}-dark-mode`}
                        value="Dark mode"
                        checked={theme === "dark"}
                        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                    >
                        Dark mode
                    </Checkbox>
                </aside>
            )}
        </section>
    );
};
