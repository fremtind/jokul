import React, { createElement, useState, useEffect } from "react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";

import "./ComponentExample.scss";

interface TestProps {
    test: string;
    boolValues?: Dictionary<boolean>;
}

interface Props extends TestProps {
    component: React.FC<TestProps>;
    knobs?: {
        boolKnobs?: Array<string>;
        optionKnobs?: Array<{
            name: string;
            values: Array<string>;
            defaultValue: string;
        }>;
    };
}
interface Dictionary<T> {
    [key: string]: T;
}
export function ComponentExample({ component, knobs, test }: Props) {
    const [boolValues, setBoolValues] = useState<Dictionary<boolean>>({});
    useEffect(() => {
        knobs?.boolKnobs?.forEach((knob) => {
            const boolValuesCopy = boolValues;
            boolValuesCopy[knob] = false;
            setBoolValues({ ...boolValuesCopy });
        });
    }, [knobs]);
    const setBoolValue = (key: string, value: boolean) => {
        const boolValuesCopy = boolValues;
        boolValuesCopy[key] = value;
        setBoolValues({ ...boolValuesCopy });
    };

    return (
        <section className="jkl-portal-component-example">
            <div className="jkl-portal-component-example__example-wrapper">
                {createElement(component, { test, boolValues })}
            </div>
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
            </aside>
        </section>
    );
}
