import React, {useId} from "react";
import {RadioButton} from "../radio-button/index.js";
import type {SegmentedControlProps} from "./types.js";

export const SegmentedControl = (props: SegmentedControlProps) => {
    const {
        legend,
        items,
        showLegend = true,
        separateItem = 0,
        ...rest
    } = props;

    const id = useId();

    const defaultItem =
        props.defaultValue &&
        typeof props.defaultValue === "string" &&
        items.indexOf(props.defaultValue);

    return (
        <fieldset className={"jkl-segmented-control"}>
            <legend
                className={`jkl-segmented-control-legend ${!showLegend && "jkl-sr-only"}`}
            >
                {legend}
            </legend>
            {items.map((item, index) => (
                <RadioButton
                    {...rest}
                    key={item}
                    className={"jkl-segmented-control-item"}
                    id={`${legend}-${item}`}
                    value={item}
                    name={`${legend}-${id}`}
                    defaultChecked={
                        index === props.defaultValue || index === defaultItem
                    }
                    data-spacing={
                        separateItem >= 0 ? separateItem === index + 1 : "true"
                    }
                >
                    {item}
                </RadioButton>
            ))}
        </fieldset>
    );
};

SegmentedControl.displayName = "Segmented Control";
