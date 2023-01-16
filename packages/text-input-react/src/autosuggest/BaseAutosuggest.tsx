import { InputGroup } from "@fremtind/jkl-input-group-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import Downshift, { type DownshiftProps } from "downshift";
import React, { type ReactNode } from "react";
import { type CommonProps } from "./Autosuggest";
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
    tooltipProps,
    supportLabelProps,
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

    return (
        <Downshift {...downshiftProps} {...customLabelProps} itemToString={itemToString}>
            {({
                getInputProps,
                getToggleButtonProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                getRootProps,
                selectedItem,
                isOpen,
                highlightedIndex,
                clearSelection,
            }) => {
                return (
                    <InputGroup
                        {...getRootProps()}
                        label={label}
                        className={cn("jkl-autosuggest", className)}
                        density={density}
                        labelProps={{
                            variant,
                            ...labelProps,
                            ...getLabelProps({
                                id: lid,
                            }),
                        }}
                        supportLabelProps={supportLabelProps}
                        tooltipProps={tooltipProps}
                        errorLabel={errorLabel}
                        helpLabel={helpLabel}
                        render={(inputProps) => (
                            <>
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
                                <div className="jkl-text-input-wrapper" data-invalid={!!errorLabel}>
                                    <input
                                        {...inputProps}
                                        {...getInputProps({
                                            id: inputProps.id,
                                            placeholder,
                                            className: "jkl-text-input__input",
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
                                </div>
                            </>
                        )}
                    />
                );
            }}
        </Downshift>
    );
}

export default BaseAutosuggest;
