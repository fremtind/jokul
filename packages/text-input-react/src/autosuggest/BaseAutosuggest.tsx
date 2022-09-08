import { Label, SupportLabel } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import Downshift, { DownshiftProps } from "downshift";
import React, { ReactNode } from "react";
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
    noHits?: { text: ReactNode; items: T[] };
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
    density,
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
    noHits,
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
                    <div className={cn("jkl-autosuggest", className)} data-density={density}>
                        {label && (
                            <Label
                                variant={variant}
                                density={density}
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
                            <p
                                className={cn("jkl-spacing-l--bottom", {
                                    "jkl-body": density !== "compact",
                                    "jkl-small": density === "compact",
                                })}
                            >
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
                                noHits={noHits}
                            />
                        )}
                        <SupportLabel id={supportId} errorLabel={errorLabel} helpLabel={helpLabel} density={density} />
                    </div>
                );
            }}
        </Downshift>
    );
}

export default BaseAutosuggest;
