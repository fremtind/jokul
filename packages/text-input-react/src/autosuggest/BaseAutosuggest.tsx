import React from "react";
import Downshift, { DownshiftProps } from "downshift";
import cn from "classnames";
import { SupportLabel } from "@fremtind/jkl-core";
import { CommonProps } from "./Autosuggest";
import ControllerButton from "./ControllerButton";
import Menu from "./Menu";

const KEY_ENTER = 13;

type BaseAutosuggestProps<T> = CommonProps & {
    /** @deprecated */
    inverted?: boolean;
    itemToString: (item: T | null) => string;
    items: T[];
    downshiftProps: DownshiftProps<T>;
    showDropdownControllerButton?: boolean;
    onConfirm?: () => void;
};

function BaseAutosuggest<T>({
    inverted = false,
    className = "",
    label,
    inputId,
    labelId,
    leadText,
    errorLabel,
    helpLabel,
    variant = "small",
    noHitsMessage,
    maxNumberOfHits,
    placeholder,
    itemToString,
    items,
    downshiftProps,
    showDropdownControllerButton = false,
    onConfirm = () => {
        /* noop */
    },
}: BaseAutosuggestProps<T>): JSX.Element {
    const customLabelProps =
        inputId && labelId
            ? {
                  inputId,
                  labelId,
              }
            : {};

    return (
        <Downshift {...downshiftProps} {...customLabelProps} itemToString={itemToString}>
            {({
                getInputProps,
                getToggleButtonProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                selectedItem,
                isOpen,
                highlightedIndex,
                clearSelection,
            }) => {
                return (
                    <div className={`jkl-autosuggest ${className}`}>
                        {label && (
                            <label
                                {...getLabelProps({
                                    className: `jkl-label jkl-label--${variant}`,
                                })}
                            >
                                {label}
                            </label>
                        )}
                        {leadText && <p className="jkl-body jkl-spacing-l--bottom">{leadText}</p>}
                        <div
                            className={cn("jkl-autosuggest__input-group", {
                                "jkl-autosuggest__input-group--open": isOpen && items.length !== 0,
                                "jkl-text-input--inverted": inverted,
                            })}
                        >
                            <input
                                {...getInputProps({
                                    placeholder,
                                    className: "jkl-text-input__input",
                                    "aria-invalid": !!errorLabel,
                                    onKeyDown: (e) => {
                                        if (e.keyCode === KEY_ENTER && !isOpen) {
                                            onConfirm();
                                        }
                                    },
                                })}
                                data-testid="autosuggest__input"
                            />
                            {showDropdownControllerButton && (
                                <ControllerButton
                                    {...getToggleButtonProps()}
                                    hasSelectedItem={!!selectedItem}
                                    clearSelection={clearSelection}
                                    inverted={inverted}
                                />
                            )}
                        </div>
                        {isOpen && (
                            <Menu
                                downshiftProps={{
                                    getMenuProps,
                                    getItemProps,
                                }}
                                highlightedIndex={highlightedIndex}
                                items={items}
                                itemToString={itemToString}
                                noHitsMessage={noHitsMessage}
                                maxNumberOfHits={maxNumberOfHits}
                                inverted={inverted}
                            />
                        )}
                        <SupportLabel inverted={inverted} errorLabel={errorLabel} helpLabel={helpLabel} />
                    </div>
                );
            }}
        </Downshift>
    );
}

export default BaseAutosuggest;
