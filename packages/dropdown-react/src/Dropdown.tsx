import React from "react";
import Downshift from "downshift";

interface Props {
    label: string;
    items: string[];
    className?: string;
    onChange: (selection: string) => void;
    initialInputValue?: string;
}

export const Dropdown = ({ label, items, className = "", initialInputValue, onChange }: Props) => {
    const onSelectionChange = (selection: string) => onChange(selection);
    return (
        /* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-key */
        <Downshift onChange={onSelectionChange} initialInputValue={initialInputValue}>
            {({
                getInputProps,
                getToggleButtonProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                highlightedIndex,
                inputValue,
                getItemProps,
            }) => (
                <div className={`jkl-dropdown ${isOpen ? "jkl-dropdown--open" : ""} ${className}`} {...getInputProps()}>
                    <button className="jkl-dropdown__toggler" {...getToggleButtonProps()}>
                        {isOpen ? "Lukk" : "Åpne"}
                    </button>
                    <label
                        className={`jkl-dropdown__label ${inputValue ? "jkl-dropdown__label--raised" : ""}`}
                        {...getLabelProps()}
                    >
                        {label}
                    </label>
                    <input
                        type="text"
                        className={`jkl-dropdown__value ${inputValue ? "jkl-dropdown__value--show" : ""}`}
                        value={inputValue !== null ? inputValue : undefined}
                        readOnly
                    />
                    <ul className="jkl-dropdown__option" {...getMenuProps()}>
                        {isOpen
                            ? items.map((item, index) => (
                                  <li
                                      className={`jkl-dropdown__option--item ${
                                          highlightedIndex === index ? "jkl-dropdown__option--item--highlighted" : ""
                                      } ${inputValue === item ? "jkl-dropdown__option--item--selected" : ""}`}
                                      {...getItemProps({
                                          key: item,
                                          index,
                                          item,
                                      })}
                                  >
                                      {item}
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            )}
        </Downshift>
        /* eslint-enable jsx-a11y/label-has-associated-control, react/jsx-key */
    );
};
