import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import cn from "classnames";
import { nanoid } from "nanoid";

const strokeColor = "black";
const strokeWidth = "2";

interface Props {
    label: string;
    description: string;
    successData?: SuccessData;
    textAreaData: TextAreaData;
    onClick: MouseEventHandler<HTMLButtonElement>;
    feedbackSubmitted: boolean;
    simplified?: boolean;
    entries?: number;
}

type SuccessData = {
    title: string;
    message: string;
};

type TextAreaData = {
    label: string;
    errorLabel?: string;
    helpLabel?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
};

const SmileySwitch = (element: number) => {
    switch (element) {
        case 1:
            return (
                <path
                    d="M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                ></path>
            );
        case 2:
            return (
                <path
                    d="M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                ></path>
            );
        case 3:
            return <line x1="20" y1="37" x2="36" y2="37" stroke={strokeColor} strokeWidth={strokeWidth}></line>;
        case 4:
            return (
                <path
                    d="M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                ></path>
            );
        case 5:
            return (
                <path
                    d="M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                ></path>
            );
        default:
            return null;
    }
};

export const Feedback = ({
    label,
    description,
    feedbackSubmitted = false,
    onClick,
    simplified,
    entries,
    successData,
    textAreaData,
}: Props) => {
    const [checked, setChecked] = useState<string>("hidden");
    const elements = [1, 2, 3, 4, 5];
    const numberOfEntries = [];
    if (simplified && entries) {
        for (let i = 1; i <= entries; i++) {
            numberOfEntries.push(i.toString());
        }
    }

    return (
        <section className="feedback">
            <div className="">
                {feedbackSubmitted && successData ? (
                    <SuccessMessage className="feedback__messagebox" fullWidth title={successData.title}>
                        {successData.message}
                    </SuccessMessage>
                ) : (
                    <fieldset className="feedback__fieldset">
                        <header>
                            <h2 className="jkl-heading-large">{label}</h2>
                            {!simplified && <legend className="jkl-lead">{description}</legend>}
                        </header>
                        {!simplified &&
                            elements.map((element) => {
                                return (
                                    <span className="feedback__answer" key={nanoid(8)}>
                                        <input
                                            className="feedback__answer--smiley"
                                            type="radio"
                                            name="feedback"
                                            id={`feedback--${element}`}
                                            value={element}
                                            onChange={(e) => setChecked(e.target.value)}
                                            checked={checked === element.toString()}
                                        />
                                        <label className="feedback__label" htmlFor={`feedback--${element}`}>
                                            <svg className={`feedback__icon${element}`} viewBox="0 0 57 57">
                                                <circle
                                                    cx="28.5"
                                                    cy="28.5"
                                                    r="27.5"
                                                    stroke={strokeColor}
                                                    strokeWidth={strokeWidth}
                                                ></circle>
                                                <circle cx="19" cy="24" r="3" fill="black"></circle>
                                                <circle cx="38" cy="24" r="3" fill="black"></circle>
                                                {SmileySwitch(element)}
                                            </svg>
                                        </label>
                                    </span>
                                );
                            })}
                        {simplified && (
                            <RadioButtons
                                legend={description}
                                name="feedback"
                                choices={numberOfEntries}
                                inline
                                onChange={(e) => setChecked(e.target.value)}
                                selectedValue={checked}
                            />
                        )}
                        <div
                            className={cn("feedback__input-submit", {
                                "feedback__input-submit--hidden": checked === "hidden",
                            })}
                        >
                            <TextArea
                                className="feedback__text-input"
                                label={textAreaData.label}
                                variant="small"
                                rows={3}
                                onChange={textAreaData.onChange}
                                helpLabel={textAreaData.helpLabel}
                                errorLabel={textAreaData.errorLabel}
                                value={textAreaData.value}
                            />
                            <SecondaryButton className="feedback__button" onClick={onClick}>
                                Send inn tilbakemelding
                            </SecondaryButton>
                        </div>
                    </fieldset>
                )}
            </div>
        </section>
    );
};

export default Feedback;
