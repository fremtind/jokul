import React, { forwardRef, useId } from "react";
import type { SegmentedControlProps } from "./types.js";

export const SegmentedControl = forwardRef<
    HTMLFieldSetElement,
    SegmentedControlProps
>((props, forwardedSelectRef) => {
    const { title, items, showTitle = true, seperateItem = 0, ...rest } = props;
    const id = useId();

    const defaultItem =
        props.defaultValue &&
        typeof props.defaultValue === "string" &&
        items.indexOf(props.defaultValue);

    return (
        <form className={"jkl-segmented-control"}>
            <fieldset>
                <legend
                    className={`jkl-segmented-control-legend ${!showTitle && "jkl-sr-only"}`}
                >
                    {title}
                </legend>
                {items.map((item, index) => (
                    <label
                        key={item}
                        className={"jkl-segmented-control-item"}
                        data-spacing={
                            seperateItem >= 0
                                ? seperateItem === index + 1
                                : "true"
                        }
                    >
                        <input
                            {...rest}
                            type={"radio"}
                            id={item}
                            value={item}
                            name={id}
                            defaultChecked={
                                index === props.defaultValue ||
                                index === defaultItem
                            }
                        />
                        {item}
                    </label>
                ))}
            </fieldset>
        </form>
    );
});

SegmentedControl.displayName = "Segmented Control";
