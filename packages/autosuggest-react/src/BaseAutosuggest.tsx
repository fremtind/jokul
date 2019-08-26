import React from "react";
import Downshift, { DownshiftProps, DownshiftInterface } from "downshift";

import { CommonProps } from "./Autosuggest";

import ControllerButton from "./ControllerButton";
import Menu from "./Menu";
import { SupportLabel } from "@fremtind/jkl-typography-react";

type BaseAutosuggestProps<T> = CommonProps & {
    itemToString: (item: T | null) => string;
    filter: (allItems: T[], inputValue: string | null) => T[];
    allItems: T[];
    downshiftProps: DownshiftProps<T>;
};

function BaseAutosuggest<T>({
    label,
    inputId,
    labelId,
    isInvalid = false,
    errorText,
    noHitsMessage,
    maxNumberOfHits,
    placeholder,
    itemToString,
    filter,
    allItems,
    downshiftProps,
}: BaseAutosuggestProps<T>) {
    const TypedDownshift: DownshiftInterface<T> = Downshift;

    const customLabelProps =
        inputId && labelId
            ? {
                  inputId: inputId,
                  labelId: labelId,
              }
            : {};

    return (
        <TypedDownshift {...downshiftProps} {...customLabelProps} itemToString={itemToString}>
            {({
                clearSelection,
                getInputProps,
                getToggleButtonProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
            }) => {
                const filteredItems = filter(allItems, inputValue);

                return (
                    <div className="jkl-autosuggest">
                        {label && (
                            <label
                                {...getLabelProps({
                                    className: "jkl-autosuggest__label",
                                })}
                            >
                                {label}
                            </label>
                        )}
                        <div className="jkl-autosuggest__input_group">
                            <input
                                {...getInputProps({
                                    placeholder,
                                    className: "jkl-autosuggest__input",
                                    "aria-invalid": isInvalid,
                                })}
                                data-testid="jkl-autosuggest__input"
                            />
                            <ControllerButton
                                {...getToggleButtonProps()}
                                clearSelection={clearSelection}
                                hasSelectedItem={!!selectedItem}
                                isOpen={isOpen}
                            />
                        </div>
                        {errorText && isInvalid && <SupportLabel errorLabel={errorText} />}
                        {isOpen && (
                            <Menu
                                downshiftProps={{
                                    getMenuProps,
                                    getItemProps,
                                }}
                                highlightedIndex={highlightedIndex}
                                items={filteredItems}
                                itemToString={itemToString}
                                noHitsMessage={noHitsMessage}
                                maxNumberOfHits={maxNumberOfHits}
                            />
                        )}
                    </div>
                );
            }}
        </TypedDownshift>
    );
}

export default BaseAutosuggest;
