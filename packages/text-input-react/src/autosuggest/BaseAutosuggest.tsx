import { Label, SupportLabel } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import Downshift, { DownshiftProps } from "downshift";
import React from "react";
import { CommonProps } from "./Autosuggest";
import ControllerButton from "./ControllerButton";
import Menu from "./Menu";

const KEY_ENTER = 13;

type BaseAutosuggestProps<T> = CommonProps & {
    itemToString: (item: T | null) => string;
    items: T[];
    downshiftProps: DownshiftProps<T>;
    showDropdownControllerButton?: boolean;
    onConfirm?: () => void;
};

function BaseAutosuggest<T>({
    className = "",
    label,
    labelProps,
    inputId,
    labelId,
    leadText,
    errorLabel,
    helpLabel,
    compact,
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
    const uid = useId(inputId || "jkl-text-input", { generateSuffix: !inputId });
    const lid = useId(labelId || "jkl-label", { generateSuffix: !labelId });

    const customLabelProps = {
        inputId: uid,
        labelId: lid,
    };

    const supportId = useId("jkl-support-label");
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

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
                    <div className={cn("jkl-autosuggest", className, { "jkl-autosuggest--compact": compact })}>
                        {label && (
                            <Label
                                variant={variant}
                                compact={compact}
                                {...labelProps}
                                {...getLabelProps({
                                    id: lid,
                                })}
                                standAlone
                            >
                                {label}
                            </Label>
                        )}
                        {leadText && (
                            <p className={cn("jkl-spacing-l--bottom", { "jkl-body": !compact, "jkl-small": compact })}>
                                {leadText}
                            </p>
                        )}
                        <div
                            className={cn("jkl-autosuggest__input-group", {
                                "jkl-autosuggest__input-group--open": isOpen && items.length !== 0,
                            })}
                        >
                            <input
                                {...getInputProps({
                                    id: uid,
                                    placeholder,
                                    className: "jkl-text-input__input",
                                    "aria-invalid": !!errorLabel,
                                    "aria-describedby": describedBy,
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
                            />
                        )}
                        <SupportLabel id={supportId} errorLabel={errorLabel} helpLabel={helpLabel} compact={compact} />
                    </div>
                );
            }}
        </Downshift>
    );
}

export default BaseAutosuggest;
