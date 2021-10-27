import React, { useState, useLayoutEffect, FC } from "react";
import cx from "classnames";
import { nanoid } from "nanoid";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Dictionary, ChoiceProp, ExampleComponentProps, BoolProp } from "./";
import { hyphenate } from "./internal/hypenate";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    responsiveLayout: boolean;
}

export const ExampleBase: FC<Props> = ({
    responsiveLayout,
    component,
    knobs,
    title = "Komponent",
    children,
    scrollable,
}) => {
    const [uid] = useState(`example-${nanoid(8)}`);
    const [showCode, setShowCode] = useState(false);
    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>({});
    const [choices, setChoices] = useState<Dictionary<string[]>>({});
    const [choiceValues, setChoiceValues] = useState<Dictionary<string>>({});
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useLayoutEffect(() => {
        setBoolValues(
            knobs?.boolProps?.reduce((acc, boolProp) => {
                if (typeof boolProp === "string") {
                    return { ...acc, [boolProp]: false };
                }
                return { ...acc, [boolProp.prop]: boolProp.defaultValue };
            }, {}) || {},
        );
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

    const toggleCode = () => setShowCode(!showCode);
    const C = component;

    return (
        <div className="jkl-spacing-2xl--bottom">
            <section className={responsiveLayout ? "jkl-portal-responsive-example" : "jkl-portal-component-example"}>
                <div
                    data-theme={theme}
                    data-example-text={title}
                    className={cx("jkl-portal-component-example__example-wrapper", {
                        "jkl-portal-component-example__example-wrapper--dark": theme === "dark",
                        "jkl-portal-component-example__example-wrapper--scrollable": scrollable,
                    })}
                >
                    <C boolValues={boolValues} choiceValues={choiceValues} />
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
                                    key={key}
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
                            {Object.entries(choiceValues).map(([key, value]) => (
                                <RadioButtons
                                    className="jkl-portal-component-example__example-options-header"
                                    variant="small"
                                    key={key}
                                    name={`${uid}-${hyphenate(key)}`}
                                    legend={key}
                                    choices={[...choices[key]]}
                                    selectedValue={value}
                                    onChange={(e) => setChoiceValue(key, e.target.value)}
                                />
                            ))}
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
            {children && (
                <div
                    className={cx("jkl-portal-code-example", {
                        "jkl-portal-code-example--open": !showCode,
                    })}
                >
                    <button className={"jkl-button jkl-button--tertiary jkl-spacing-xs--top"} onClick={toggleCode}>
                        {`${showCode ? "Skjul" : "Vis"} kode`}
                    </button>
                    {showCode && children}
                </div>
            )}
        </div>
    );
};
