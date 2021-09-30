import React, { useState, FC } from "react";
import { ExampleComponentProps, ChoiceProp, BoolProp } from "./";
import { ExampleBase } from "./ExampleBase";
import { devices } from "./internal/Devices";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
}

const getDeviceFromLocalStore = (defaultDevice?: string) => {
    if (typeof window !== "undefined") {
        return window.sessionStorage.getItem("jkl-portal-device") || defaultDevice;
    }
    return defaultDevice;
};

export function ResponsiveExample({ component, knobs, title = "Komponent" }: Props) {
    const C = component;
    const [selectedDevice, setSelectedDevice] = useState(getDeviceFromLocalStore(devices[0].displayName));

    return (
        <ExampleBase
            knobs={knobs}
            title={title}
            responsiveLayout={true}
            component={({ boolValues, choiceValues }) => (
                <>
                    <fieldset className="jkl-field-group">
                        <legend className="jkl-field-group__legend">
                            <span className="jkl-label jkl-label--medium">Velg dings</span>
                        </legend>
                        {devices.map((Device) => (
                            <div
                                className="jkl-radio-button jkl-radio-button--inline"
                                key={`button-${Device.displayName}`}
                            >
                                <input
                                    id={`jkl-portal-device-${Device.displayName?.replace(" ", "-")}`}
                                    className="jkl-radio-button__input"
                                    type="radio"
                                    onChange={() => {
                                        window.sessionStorage.setItem("jkl-portal-device", Device.displayName ?? "");
                                        setSelectedDevice(Device.displayName);
                                    }}
                                    checked={Device.displayName === selectedDevice}
                                    name={Device.displayName}
                                    value={Device.displayName}
                                />
                                <label
                                    data-testid="jkl-radio-button__label-tag"
                                    htmlFor={`jkl-portal-device-${Device.displayName?.replace(" ", "-")}`}
                                    className="jkl-radio-button__label"
                                >
                                    <span aria-hidden className="jkl-radio-button__dot" />
                                    <span className="jkl-radio-button__text">{Device.displayName}</span>
                                </label>
                            </div>
                        ))}
                    </fieldset>
                    {devices.map((Device) => {
                        if (selectedDevice === Device.displayName) {
                            return (
                                <Device key={Device.displayName}>
                                    <C boolValues={boolValues} choiceValues={choiceValues} />
                                </Device>
                            );
                        }
                        return null;
                    })}
                </>
            )}
        />
    );
}
