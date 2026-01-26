import clsx from "clsx";
import {
    type Callback,
    default as Downshift,
    type DownshiftProps,
    type PropGetters,
} from "downshift";
import React, { type ReactNode } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { InputGroup } from "../input-group/InputGroup.js";
import ControllerButton from "./ControllerButton.js";
import Menu from "./Menu.js";
import type { CommonProps } from "./types.js";

const KEY_ENTER = 13;

type BaseAutosuggestProps<T> = CommonProps & {
    itemToString: (item: T | null) => string;
    items: T[];
    downshiftProps: DownshiftProps<T>;
    showDropdownControllerButton?: boolean;
    onConfirm?: () => void;
    noHits?: { text: ReactNode; items: T[] };
};
interface Props extends PropGetters<any>, DownshiftProps<any> {
    clearSelection: (cb?: Callback) => void;
}

function BaseAutosuggest<T>({
    className = "",
    label,
    labelProps,
    tooltip,
    supportLabelProps,
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
    noHits,
}: BaseAutosuggestProps<T>): JSX.Element {
    const uid = useId(inputId || "jkl-text-input", {
        generateSuffix: !inputId,
    });
    const lid = useId(labelId || "jkl-label", { generateSuffix: !labelId });

    const customLabelProps = {
        inputId: uid,
        labelId: lid,
    };

    return (
        /* @ts-ignore-next-line det er noe rart og ancient med downshift */
        <Downshift
            {...downshiftProps}
            {...customLabelProps}
            itemToString={itemToString}
        >
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
            }: Props) => {
                return (
                    <InputGroup
                        {...getRootProps()}
                        label={label}
                        className={clsx("jkl-autosuggest", className)}
                        labelProps={{
                            variant,
                            ...labelProps,
                            ...getLabelProps({
                                id: lid,
                            }),
                        }}
                        supportLabelProps={supportLabelProps}
                        tooltip={tooltip}
                        errorLabel={errorLabel}
                        helpLabel={helpLabel}
                        render={(inputProps) => (
                            <>
                                {leadText && (
                                    <p className="jkl-spacing-24--bottom">
                                        {leadText}
                                    </p>
                                )}
                                <div
                                    className="jkl-text-input-wrapper"
                                    data-invalid={!!errorLabel}
                                >
                                    <input
                                        {...inputProps}
                                        {...getInputProps({
                                            id: inputProps.id,
                                            placeholder,
                                            className: "jkl-text-input__input",
                                            onKeyDown: (e) => {
                                                if (
                                                    e.keyCode === KEY_ENTER &&
                                                    !isOpen
                                                ) {
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
