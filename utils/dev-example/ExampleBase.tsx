import React, { type FC, useEffect, useMemo, useState } from "react";
import { Checkbox } from "../../packages/jokul/src/components/checkbox/index.js";
import { FieldGroup } from "../../packages/jokul/src/components/input-group/index.js";
import {
    RadioButton,
    RadioButtonGroup,
} from "../../packages/jokul/src/components/radio-button/index.js";
import { Select } from "../../packages/jokul/src/components/select/index.js";
import type { ColorScheme, Size } from "../../packages/jokul/src/core/types.js";
import {
    useId,
    useLocalStorage,
} from "../../packages/jokul/src/hooks/index.js";
import { CodeBlock } from "./CodeBlock/index.js";
import { CodeSection } from "./CodeSection.js";
import { ExampleContextProvider } from "./exampleContext.js";
import type {
    BoolProp,
    ChoiceProp,
    CodeExample,
    Dictionary,
    ExampleComponentProps,
} from "./index.js";
import { hyphenate } from "./internal/hypenate.js";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    noSize?: boolean;
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
    noSize = false,
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
    const [size, setSize] = useLocalStorage<Size>("jkl-example-size", "medium");
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
                displayValues={{ size, theme }}
            />
        );
    }, [component, boolValues, choiceValues, size, theme]);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return (
        <ExampleContextProvider state={{ theme, size }}>
            <button
                type="button"
                id="screenshot-mode-toggle"
                hidden={true}
                aria-label="Toggle screenshot mode"
                onClick={() => setScreenshotMode(!screenshotMode)}
            />
            <div className="jkl-spacing-64--bottom">
                <section
                    className={`jkl-portal-component-example ${
                        isWide ? "jkl-portal-component-example--is-wide" : ""
                    }`}
                >
                    <div
                        data-testid="component-example"
                        data-size={size}
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
                        } ${size === "medium" ? "jkl-body" : ""} ${
                            size === "small" ? "jkl-small" : ""
                        }`.trim()}
                        style={style}
                        data-test-mode={
                            screenshotMode ? "e2e-screenshot" : null
                        }
                    >
                        {example}
                    </div>
                    <aside
                        data-size="small"
                        className="jkl-portal-component-example__example-options"
                    >
                        <>
                            {(knobs?.boolProps || knobs?.choiceProps) && (
                                <FieldGroup
                                    legend="Egenskaper"
                                    labelProps={{ variant: "medium" }}
                                    className="jkl-portal-component-example__example-options-header"
                                >
                                    {knobs?.boolProps &&
                                        Object.entries(boolValues).map(
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
                                                            e.target.checked,
                                                        )
                                                    }
                                                    data-testid={`bool-prop-${hyphenate(
                                                        key,
                                                    )}`}
                                                >
                                                    {key}
                                                </Checkbox>
                                            ),
                                        )}
                                    {knobs?.choiceProps &&
                                        Object.entries(choiceValues).map(
                                            ([key, value]) =>
                                                choices[key].length < 4 ? (
                                                    <RadioButtonGroup
                                                        className="jkl-spacing-8--top"
                                                        name={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                        key={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                        legend={key}
                                                        value={value}
                                                        labelProps={{
                                                            variant: "small",
                                                        }}
                                                        onChange={(e) =>
                                                            setChoiceValue(
                                                                key,
                                                                e.target.value,
                                                            )
                                                        }
                                                    >
                                                        {choices[key]?.map(
                                                            (choice) => (
                                                                <RadioButton
                                                                    key={choice}
                                                                    value={
                                                                        choice
                                                                    }
                                                                    data-testid={`choice-prop-${hyphenate(
                                                                        choice,
                                                                    )}`}
                                                                >
                                                                    {choice}
                                                                </RadioButton>
                                                            ),
                                                        )}
                                                    </RadioButtonGroup>
                                                ) : (
                                                    <Select
                                                        className="jkl-spacing-8--top"
                                                        value={value}
                                                        onChange={(e) =>
                                                            setChoiceValue(
                                                                key,
                                                                e.target.value,
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
                                    <RadioButton
                                        value="light"
                                        data-testid="theme-light"
                                    >
                                        Light
                                    </RadioButton>
                                    <RadioButton
                                        value="dark"
                                        data-testid="theme-dark"
                                    >
                                        Dark
                                    </RadioButton>
                                </RadioButtonGroup>
                                {noSize ? null : (
                                    <RadioButtonGroup
                                        className="jkl-spacing-8--top"
                                        name={`${uid}-size`}
                                        legend="Størrelse"
                                        value={size}
                                        labelProps={{ variant: "small" }}
                                        onChange={(e) =>
                                            setSize(e.target.value as Size)
                                        }
                                    >
                                        <RadioButton
                                            value="small"
                                            data-testid="size-small"
                                        >
                                            Small
                                        </RadioButton>
                                        <RadioButton
                                            value="medium"
                                            data-testid="size-default"
                                        >
                                            Default
                                        </RadioButton>
                                        <RadioButton
                                            value="large"
                                            data-testid="size-large"
                                        >
                                            Large
                                        </RadioButton>
                                    </RadioButtonGroup>
                                )}
                            </FieldGroup>
                        </>
                    </aside>
                </section>
                {hasMounted && codeExample && (
                    <CodeSection className="jkl-spacing-16--top">
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
