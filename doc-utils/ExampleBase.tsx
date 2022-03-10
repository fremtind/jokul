import React, { useState, VFC, FC, useMemo } from "react";
import cn from "classnames";
import { useId } from "@fremtind/jkl-react-hooks";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { RadioButton, RadioButtonGroup } from "@fremtind/jkl-radio-button-react";
import { Select } from "@fremtind/jkl-select-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { ExpandSection } from "@fremtind/jkl-expand-button-react";
import { Dictionary, ChoiceProp, ExampleComponentProps, BoolProp, CodeExample } from "./";
import { hyphenate } from "./internal/hypenate";
import { CodeBlock } from "./CodeBlock";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    codeExample?: CodeExample;
}

export const ExampleBase: VFC<Props> = ({ component, knobs, title = "Komponent", codeExample, scrollable }) => {
    const uid = useId("example");
    const [showCodeText, setShowCodeText] = useState("Vis kode");
    const [theme, setTheme] = useState<"light" | "dark">("light");

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

    const toggleCodeText = (e: Event, expanded: boolean) => setShowCodeText(expanded ? "Skjul kode" : "Vis kode");

    const example = useMemo(() => {
        const C = component;
        return <C boolValues={boolValues} choiceValues={choiceValues} />;
    }, [component, boolValues, choiceValues]);

    return (
        <div className="jkl-spacing-2xl--bottom">
            <section className="jkl-portal-component-example">
                <div
                    data-theme={theme}
                    data-example-text={title}
                    className={cn("jkl", "jkl-portal-component-example__example-wrapper", {
                        "jkl-portal-component-example__example-wrapper--dark": theme === "dark",
                        "jkl-portal-component-example__example-wrapper--scrollable": scrollable,
                    })}
                >
                    {example}
                </div>
                <aside data-compactlayout={true} className="jkl-portal-component-example__example-options">
                    {knobs?.boolProps && (
                        <FieldGroup
                            legend="Egenskaper"
                            variant="small"
                            className="jkl-portal-component-example__example-options-header"
                        >
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
                        </FieldGroup>
                    )}
                    {knobs?.choiceProps && (
                        <>
                            {Object.entries(choiceValues).map(([key, value]) =>
                                choices[key].length < 4 ? (
                                    <RadioButtonGroup
                                        className="jkl-portal-component-example__example-options-header"
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
                                        className="jkl-portal-component-example__select"
                                        value={value}
                                        onChange={(e) => setChoiceValue(key, e.target.value)}
                                        label={key}
                                        key={`${uid}-${hyphenate(key)}`}
                                        name={key}
                                        items={choices[key]}
                                    />
                                ),
                            )}
                        </>
                    )}
                    <FieldGroup
                        legend="Visning"
                        variant="small"
                        className="jkl-portal-component-example__example-options-header"
                    >
                        <Checkbox
                            name={`${uid}-dark-mode`}
                            value="Dark mode"
                            checked={theme === "dark"}
                            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                        >
                            Dark mode
                        </Checkbox>
                    </FieldGroup>
                </aside>
            </section>
            {codeExample && (
                <ExpandSection className="jkl-spacing-m--top" title={showCodeText} onToggle={toggleCodeText}>
                    <CodeBlock language="tsx">
                        {typeof codeExample === "string" ? codeExample : codeExample({ boolValues, choiceValues })}
                    </CodeBlock>
                </ExpandSection>
            )}
        </div>
    );
};
