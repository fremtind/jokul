import clsx from "clsx";
import React, { type FormEvent, useId, useState } from "react";
import { Button } from "../button/index.js";
import { Flex } from "../flex/index.js";
import { BETA_Help } from "../help/index.js";
import { SupportLabel } from "../input-group/index.js";
import { Popover } from "../popover/index.js";
import { TextInput } from "../text-input/index.js";
import type { BETA_ComboboxProps } from "./types.js";

export const BETA_Combobox = ({
    className,
    label = "Label",
    placeholder = "Velg",
    options,
    multiselect = false,
    description,
    help,
    errorMessage,
    defaultValue,
    ...rest
}: BETA_ComboboxProps) => {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [chosenOptions, setChosenOptions] = useState<Array<string>>(
        defaultValue || [],
    );
    const [filteredOptions, setFilteredOptions] = useState(options);
    const noChosenOptions = !chosenOptions.length;

    const handleFormChange = (inputElement: FormEvent["currentTarget"]) => {
        const inputs = Array.from(inputElement.getElementsByTagName("input"));
        setChosenOptions(
            inputs
                .filter((option) => option.checked)
                .map((option) => option.value),
        );
    };

    return (
        <div className={clsx("BETA_jkl-combobox", className)}>
            <label htmlFor={`${id}-combobox`}>{label}</label>
            {help && (
                <BETA_Help
                    {...help}
                    id={`${id}-combobox-help`}
                    showButtonText={false}
                    className="help"
                />
            )}
            {description && (
                <p id={`${id}-combobox-description`} className="description">
                    {description}
                </p>
            )}
            <div className="combobox">
                {noChosenOptions ? (
                    <div className="chips">{placeholder}</div>
                ) : (
                    <fieldset
                        className="chips"
                        onChange={(e) => handleFormChange(e.currentTarget)}
                    >
                        <legend className="jkl-sr-only">
                            Valgte alternativ
                        </legend>
                        {chosenOptions.map((option) => (
                            <label
                                key={option}
                                className="BETA_jkl-combobox jkl-chip jkl-chip--filter"
                            >
                                <input
                                    type={multiselect ? "checkbox" : "radio"}
                                    name={`${id}-option`}
                                    value={option}
                                    defaultChecked={chosenOptions.includes(
                                        option,
                                    )}
                                />
                                {option}
                            </label>
                        ))}
                    </fieldset>
                )}
                <hr />
                <Popover
                    open={isOpen}
                    onOpenChange={() => {
                        setFilteredOptions(options);
                        setIsOpen(!isOpen);
                    }}
                >
                    <Popover.Trigger
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        asChild
                    >
                        <Button
                            variant="ghost"
                            type="button"
                            className="text-field"
                        >
                            Velg
                        </Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <TextInput
                            {...rest}
                            label="Søk etter alternativ"
                            labelProps={{ srOnly: true }}
                            placeholder="Søk"
                            width="100%"
                            id={`${id}-combobox`}
                            aria-describedby={`${id}-combobox-error ${id}-combobox-description`}
                            aria-details={`${id}-combobox-help`}
                            onChange={(e) =>
                                setFilteredOptions(
                                    options.filter((option) =>
                                        option
                                            .toLowerCase()
                                            .includes(
                                                e.target.value.toLowerCase(),
                                            ),
                                    ),
                                )
                            }
                        />
                        <form id={`${id}-combobox-form`}>
                            <fieldset
                                onChange={(e) =>
                                    handleFormChange(e.currentTarget)
                                }
                            >
                                <legend className="jkl-sr-only">
                                    Alternativer
                                </legend>
                                {filteredOptions.map((option) => (
                                    <Flex
                                        as="label"
                                        justifyContent="space-between"
                                        key={option}
                                        className="BETA_jkl-combobox jkl-combobox__option option"
                                    >
                                        <input
                                            type={
                                                multiselect
                                                    ? "checkbox"
                                                    : "radio"
                                            }
                                            name={`${id}-option`}
                                            value={option}
                                            defaultChecked={chosenOptions.includes(
                                                option,
                                            )}
                                        />
                                        {option}
                                    </Flex>
                                ))}
                            </fieldset>
                        </form>
                    </Popover.Content>
                </Popover>
            </div>
            {errorMessage && (
                <SupportLabel
                    id={`${id}-combobox-error`}
                    className="error"
                    label={errorMessage}
                    labelType="error"
                />
            )}
        </div>
    );
};
