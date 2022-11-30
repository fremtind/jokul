import React, { useState, FC, useMemo, useEffect } from "react";
import { Checkbox } from "../packages/checkbox-react";
import { ColorScheme, Density } from "../packages/core";
import { FieldGroup } from "../packages/field-group-react";
import { RadioButton, RadioButtonGroup } from "../packages/radio-button-react";
import { useId } from "../packages/react-hooks";
import { Select } from "../packages/select-react";
import { CodeBlock } from "./CodeBlock";
import { CodeSection } from "./CodeSection";
import { hyphenate } from "./internal/hypenate";
import { Dictionary, ChoiceProp, ExampleComponentProps, BoolProp, CodeExample } from "./";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    codeExample?: CodeExample;
    style?: React.CSSProperties;
}

function useLocalStorage<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        if (!localStorage) {
            return;
        }
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setState(JSON.parse(storedValue));
        }
        // Kjøres bare én gang ved oppstart
    }, [key]);

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export const ExampleBase: FC<Props> = ({ component, knobs, title = "Komponent", codeExample, scrollable, style }) => {
    const uid = useId("example");
    const [theme, setTheme] = useLocalStorage<ColorScheme>("jkl-example-theme", "light");
    const [density, setDensity] = useLocalStorage<Density>("jkl-example-density", "comfortable");

    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>(
        knobs?.boolProps?.reduce((acc, boolProp) => {
            if (typeof boolProp === "string") {
                return { ...acc, [boolProp]: false };
            }
            return { ...acc, [boolProp.prop]: boolProp.defaultValue };
        }, {}) || {},
    );

    const [choiceValues, setChoiceValues] = useState<Dictionary<string>>(
        knobs?.choiceProps?.reduce(
            (acc, { name, values, defaultValue }) => ({
                ...acc,
                [name]: values[defaultValue],
            }),
            {},
        ) || {},
    );

    const choices: Dictionary<string[]> =
        knobs?.choiceProps?.reduce((acc, { name, values }) => ({ ...acc, [name]: values }), {}) || {};

    const setBoolValue = (key: string, value: boolean) =>
        setBoolValues((oldValues) => ({ ...oldValues, [key]: value }));
    const setChoiceValue = (key: string, value: string) =>
        setChoiceValues((oldValues) => ({ ...oldValues, [key]: value }));

    const example = useMemo(() => {
        const C = component;
        return <C boolValues={boolValues} choiceValues={choiceValues} displayValues={{ density, theme }} />;
    }, [component, boolValues, choiceValues, density, theme]);

    return (
        <div className="jkl-spacing-2xl--bottom">
            <section className="jkl-portal-component-example">
                <div
                    id={hyphenate(title)}
                    data-layout-density={density}
                    data-theme={theme}
                    data-example-text={title}
                    className={`jkl jkl-portal-component-example__example-wrapper ${
                        theme === "dark" ? "jkl-portal-component-example__example-wrapper--dark" : ""
                    } ${scrollable ? "jkl-portal-component-example__example-wrapper--scrollable" : ""} ${
                        density === "comfortable" ? "jkl-body" : ""
                    } ${density === "compact" ? "jkl-small" : ""}`.trim()}
                    style={style}
                >
                    {example}
                </div>
                <aside data-layout-density="compact" className="jkl-portal-component-example__example-options">
                    <>
                        {(knobs?.boolProps || knobs?.choiceProps) && (
                            <FieldGroup
                                legend="Egenskaper"
                                variant="medium"
                                className="jkl-portal-component-example__example-options-header"
                            >
                                {knobs?.boolProps && (
                                    <>
                                        {Object.entries(boolValues).map(([key, value]) => (
                                            <Checkbox
                                                key={`${uid}-${hyphenate(key)}`}
                                                name={`${uid}-${hyphenate(key)}`}
                                                value={key}
                                                checked={value}
                                                onChange={(e) => setBoolValue(key, e.target.checked)}
                                            >
                                                {key}
                                            </Checkbox>
                                        ))}
                                    </>
                                )}
                                {knobs?.choiceProps && (
                                    <>
                                        {Object.entries(choiceValues).map(([key, value]) =>
                                            choices[key].length < 4 ? (
                                                <RadioButtonGroup
                                                    className="jkl-spacing-xs--top"
                                                    variant="small"
                                                    name={`${uid}-${hyphenate(key)}`}
                                                    key={`${uid}-${hyphenate(key)}`}
                                                    legend={key}
                                                    value={value}
                                                    labelProps={{ variant: "small" }}
                                                    onChange={(e) => setChoiceValue(key, e.target.value)}
                                                >
                                                    {choices[key]?.map((choice) => (
                                                        <RadioButton key={choice} label={choice} value={choice} />
                                                    ))}
                                                </RadioButtonGroup>
                                            ) : (
                                                <Select
                                                    className="jkl-spacing-xs--top"
                                                    value={value}
                                                    onChange={(e) => setChoiceValue(key, e.target.value)}
                                                    label={key}
                                                    width="100%"
                                                    key={`${uid}-${hyphenate(key)}`}
                                                    name={key}
                                                    items={choices[key]}
                                                />
                                            ),
                                        )}
                                    </>
                                )}
                            </FieldGroup>
                        )}
                        <FieldGroup
                            legend="Visning"
                            variant="medium"
                            className="jkl-portal-component-example__example-options-header"
                        >
                            <RadioButtonGroup
                                variant="small"
                                name={`${uid}-theme`}
                                legend="Tema"
                                value={theme}
                                labelProps={{ variant: "small" }}
                                onChange={(e) => setTheme(e.target.value as ColorScheme)}
                            >
                                <RadioButton label="Light" value="light" />
                                <RadioButton label="Dark" value="dark" />
                            </RadioButtonGroup>
                            <RadioButtonGroup
                                className="jkl-spacing-xs--top"
                                variant="small"
                                name={`${uid}-density`}
                                legend="Tetthet"
                                value={density}
                                labelProps={{ variant: "small" }}
                                onChange={(e) => setDensity(e.target.value as Density)}
                            >
                                <RadioButton label="Default" value="comfortable" />
                                <RadioButton label="Compact" value="compact" />
                            </RadioButtonGroup>
                        </FieldGroup>
                    </>
                </aside>
            </section>
            {codeExample && (
                <CodeSection className="jkl-spacing-m--top">
                    <CodeBlock language="tsx">
                        {typeof codeExample === "string"
                            ? codeExample.trim()
                            : codeExample({ boolValues, choiceValues }).trim()}
                    </CodeBlock>
                </CodeSection>
            )}
        </div>
    );
};
