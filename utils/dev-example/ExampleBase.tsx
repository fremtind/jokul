import React, { type FC, useEffect, useMemo, useState, useId } from "react";
import type { ColorScheme, Size } from "../../packages/jokul/src/core/types.js";
import { useLocalStorage } from "../../packages/jokul/src/hooks/index.js";
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
    const uid = useId();
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
                        className="jkl-portal-component-example__example-knobs"
                    >
                        <>
                            {(knobs?.boolProps || knobs?.choiceProps) && (
                                <section className="jkl-portal-component-example__example-knobs__props">
                                    <p>Egenskaper</p>
                                    {knobs?.boolProps && (
                                        <div>
                                            {Object.entries(boolValues).map(
                                                ([key, value]) => (
                                                    <label
                                                        key={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                    >
                                                        <input
                                                            type="checkbox"
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
                                                            data-testid={`bool-prop-${hyphenate(
                                                                key,
                                                            )}`}
                                                        />
                                                        {key}
                                                    </label>
                                                ),
                                            )}
                                        </div>
                                    )}
                                    {knobs?.choiceProps &&
                                        Object.entries(choiceValues).map(
                                            ([key, value]) =>
                                                choices[key].length < 4 ? (
                                                    <fieldset
                                                        name={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                        key={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                    >
                                                        <legend>{key}</legend>
                                                        {choices[key]?.map(
                                                            (choice) => (
                                                                <label
                                                                    key={`${uid}-${choice}`}
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        value={
                                                                            choice
                                                                        }
                                                                        data-testid={`choice-prop-${hyphenate(
                                                                            choice,
                                                                        )}`}
                                                                        name={`${uid}-${hyphenate(
                                                                            key,
                                                                        )}-choice`}
                                                                        onChange={(
                                                                            e,
                                                                        ) =>
                                                                            setChoiceValue(
                                                                                key,
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                            )
                                                                        }
                                                                    />
                                                                    {choice}
                                                                </label>
                                                            ),
                                                        )}
                                                    </fieldset>
                                                ) : (
                                                    <label
                                                        key={`${uid}-${hyphenate(
                                                            key,
                                                        )}`}
                                                    >
                                                        {key}
                                                        <select
                                                            value={value}
                                                            onChange={(e) =>
                                                                setChoiceValue(
                                                                    key,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            name={key}
                                                            id={`${key}-${value}`}
                                                        >
                                                            {choices[key].map(
                                                                (choice) => (
                                                                    <option
                                                                        key={
                                                                            choice
                                                                        }
                                                                    >
                                                                        {choice}
                                                                    </option>
                                                                ),
                                                            )}
                                                        </select>
                                                    </label>
                                                ),
                                        )}
                                </section>
                            )}
                            <section className="jkl-portal-component-example__example-knobs__view">
                                <p>Visning</p>
                                <fieldset name={`${uid}-theme`}>
                                    <legend>Tema</legend>
                                    <label>
                                        <input
                                            type="radio"
                                            name="theme"
                                            value="light"
                                            data-testid="theme-light"
                                            defaultChecked={theme === "light"}
                                            onChange={(e) =>
                                                setTheme(
                                                    e.target
                                                        .value as ColorScheme,
                                                )
                                            }
                                        />
                                        Light
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="theme"
                                            value="dark"
                                            data-testid="theme-dark"
                                            defaultChecked={theme === "dark"}
                                            onChange={(e) =>
                                                setTheme(
                                                    e.target
                                                        .value as ColorScheme,
                                                )
                                            }
                                        />
                                        Dark
                                    </label>
                                </fieldset>
                                {noSize ? null : (
                                    <fieldset name={`${uid}-size`}>
                                        <legend>Størrelse</legend>
                                        <label>
                                            <input
                                                type="radio"
                                                name="size"
                                                value="small"
                                                data-testid="size-small"
                                                onChange={(e) =>
                                                    setSize(
                                                        e.target.value as Size,
                                                    )
                                                }
                                            />
                                            Small
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="size"
                                                value="medium"
                                                defaultChecked
                                                data-testid="size-medium"
                                                onChange={(e) =>
                                                    setSize(
                                                        e.target.value as Size,
                                                    )
                                                }
                                            />
                                            Medium
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="size"
                                                value="large"
                                                data-testid="size-large"
                                                onChange={(e) =>
                                                    setSize(
                                                        e.target.value as Size,
                                                    )
                                                }
                                            />
                                            Large
                                        </label>
                                    </fieldset>
                                )}
                            </section>
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
