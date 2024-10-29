import React, { FC, useEffect, useMemo, useState } from "react";
import { Checkbox } from "../../packages/jokul/src/components/checkbox";
import { FieldGroup } from "../../packages/jokul/src/components/input-group";
import {
    RadioButton,
    RadioButtonGroup,
} from "../../packages/jokul/src/components/radio-button";
import { Select } from "../../packages/jokul/src/components/select";
import { ColorScheme, Density } from "../../packages/jokul/src/core";
import { useId, useLocalStorage } from "../../packages/jokul/src/hooks";
import { CodeBlock } from "./CodeBlock";
import { CodeSection } from "./CodeSection";
import { ExampleContextProvider } from "./exampleContext";
import { hyphenate } from "./internal/hypenate";
import {
    BoolProp,
    ChoiceProp,
    CodeExample,
    Dictionary,
    ExampleComponentProps,
} from "./";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    noDensity?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    codeExample?: CodeExample;
    isWide?: boolean;
    style?: React.CSSProperties;
}

export const ExampleBase: FC<Props> = ({
    component,
    knobs = {},
    noDensity = false,
    title = "Komponent",
    codeExample,
    scrollable,
    style,
    isWide,
}) => {
    const uid = useId("example");
    const [theme, setTheme] = useLocalStorage<ColorScheme>(
        "jkl-example-theme",
        "light",
    );
    const [density, setDensity] = useLocalStorage<Density>(
        "jkl-example-density",
        "comfortable",
    );
    const [screenshotMode, setScreenshotMode] = useState(false);

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
        knobs?.choiceProps?.reduce(
            (acc, { name, values }) => ({ ...acc, [name]: values }),
            {},
        ) || {};

    const setBoolValue = (key: string, value: boolean) =>
        setBoolValues((oldValues) => ({ ...oldValues, [key]: value }));
    const setChoiceValue = (key: string, value: string) =>
        setChoiceValues((oldValues) => ({ ...oldValues, [key]: value }));

    const example = useMemo(() => {
        const C = component;
        return (
            <C
                boolValues={boolValues}
                choiceValues={choiceValues}
                displayValues={{ density, theme }}
            />
        );
    }, [component, boolValues, choiceValues, density, theme]);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return (
        <ExampleContextProvider state={{ theme, density }}>
            <button
                id="screenshot-mode-toggle"
                hidden={true}
                onClick={() => setScreenshotMode(!screenshotMode)}
            ></button>
            <div className="mb-64">
                <section
                    className={`jkl-portal-component-example ${
                        isWide ? "jkl-portal-component-example--is-wide" : ""
                    }`}
                >
                    <div
                        id={hyphenate(title)}
                        data-layout-density={density}
                        data-theme={theme}
                        data-example-text={title}
                        className={`jkl jkl-portal-component-example__example-wrapper ${
                            theme === "dark"
                                ? "jkl-portal-component-example__example-wrapper--dark"
                                : ""
                        } ${
                            scrollable
                                ? "jkl-portal-component-example__example-wrapper--scrollable"
                                : ""
                        } ${density === "comfortable" ? "jkl-body" : ""} ${
                            density === "compact" ? "jkl-small" : ""
                        }`.trim()}
                        style={style}
                        data-test-mode={
                            screenshotMode ? "e2e-screenshot" : null
                        }
                    >
                        {example}
                    </div>
                    <aside
                        data-layout-density="compact"
                        className="jkl-portal-component-example__example-options"
                    >
                        <>
                            {(knobs?.boolProps || knobs?.choiceProps) && (
                                <FieldGroup
                                    legend="Egenskaper"
                                    labelProps={{ variant: "medium" }}
                                    className="jkl-portal-component-example__example-options-header"
                                >
                                    {knobs?.boolProps && (
                                        <>
                                            {Object.entries(boolValues).map(
                                                ([key, value]) => (
                                                    <Checkbox
                                                        key={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                        name={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                        value={key}
                                                        checked={value}
                                                        onChange={(e) =>
                                                            setBoolValue(
                                                                key,
                                                                e.target
                                                                    .checked,
                                                            )
                                                        }
                                                    >
                                                        {key}
                                                    </Checkbox>
                                                ),
                                            )}
                                        </>
                                    )}
                                    {knobs?.choiceProps && (
                                        <>
                                            {Object.entries(choiceValues).map(
                                                ([key, value]) =>
                                                    choices[key].length < 4 ? (
                                                        <RadioButtonGroup
                                                            className="mt-8"
                                                            name={`${uid}-${hyphenate(
                                                                key,
                                                            )}`}
                                                            key={`${uid}-${hyphenate(
                                                                key,
                                                            )}`}
                                                            legend={key}
                                                            value={value}
                                                            labelProps={{
                                                                variant:
                                                                    "small",
                                                            }}
                                                            onChange={(e) =>
                                                                setChoiceValue(
                                                                    key,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        >
                                                            {choices[key]?.map(
                                                                (choice) => (
                                                                    <RadioButton
                                                                        key={
                                                                            choice
                                                                        }
                                                                        value={
                                                                            choice
                                                                        }
                                                                    >
                                                                        {choice}
                                                                    </RadioButton>
                                                                ),
                                                            )}
                                                        </RadioButtonGroup>
                                                    ) : (
                                                        <Select
                                                            className="mt-8"
                                                            value={value}
                                                            onChange={(e) =>
                                                                setChoiceValue(
                                                                    key,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            label={key}
                                                            width="100%"
                                                            key={`${uid}-${hyphenate(
                                                                key,
                                                            )}`}
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
                                labelProps={{ variant: "medium" }}
                                className="jkl-portal-component-example__example-options-header"
                            >
                                <RadioButtonGroup
                                    name={`${uid}-theme`}
                                    legend="Tema"
                                    value={theme}
                                    labelProps={{ variant: "small" }}
                                    onChange={(e) =>
                                        setTheme(e.target.value as ColorScheme)
                                    }
                                >
                                    <RadioButton value="light">
                                        Light
                                    </RadioButton>
                                    <RadioButton value="dark">Dark</RadioButton>
                                </RadioButtonGroup>
                                {noDensity ? null : (
                                    <RadioButtonGroup
                                        className="mt-8"
                                        name={`${uid}-density`}
                                        legend="Tetthet"
                                        value={density}
                                        labelProps={{ variant: "small" }}
                                        onChange={(e) =>
                                            setDensity(
                                                e.target.value as Density,
                                            )
                                        }
                                    >
                                        <RadioButton value="comfortable">
                                            Default
                                        </RadioButton>
                                        <RadioButton value="compact">
                                            Compact
                                        </RadioButton>
                                    </RadioButtonGroup>
                                )}
                            </FieldGroup>
                        </>
                    </aside>
                </section>
                {hasMounted && codeExample && (
                    <CodeSection className="mt-16">
                        <CodeBlock language="tsx">
                            {typeof codeExample === "string"
                                ? codeExample.trim()
                                : codeExample({
                                      boolValues,
                                      choiceValues,
                                  }).trim()}
                        </CodeBlock>
                    </CodeSection>
                )}
            </div>
        </ExampleContextProvider>
    );
};
