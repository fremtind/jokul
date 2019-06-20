import React, { useState } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";
import "../dropdown.scss";

// Eslint do not understand how Downshift sets keys and label controls as its packed into the render props
/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-key */
const App = () => {
    const items = [{ value: "Frem" }, { value: "Tind" }, { value: "Fremtind" }, { value: "Jøkkkul" }];
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Downshift
            itemToString={(item) => (item ? item.value : "")}
            isOpen={dropdownOpen}
            onOuterClick={() => setDropdownOpen(false)}
        >
            {({ getLabelProps, getMenuProps, isOpen, highlightedIndex, inputValue, getItemProps }) => (
                <div
                    className={`jkl-dropdown ${isOpen ? "jkl-dropdown--open" : ""}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setDropdownOpen(!dropdownOpen)}
                >
                    <label
                        className={`jkl-dropdown__label ${inputValue || isOpen ? "jkl-dropdown__label--raised" : ""}`}
                        {...getLabelProps()}
                    >
                        Forsikringstype
                    </label>
                    <span className="jkl-dropdown__value">{inputValue}</span>
                    <ul className="jkl-dropdown__option" {...getMenuProps()}>
                        {isOpen
                            ? items.map((item, index) => (
                                  <li
                                      className={`jkl-dropdown__option--item ${
                                          highlightedIndex === index ? "jkl-dropdown__option--item--highlighted" : ""
                                      } ${inputValue === item.value ? "jkl-dropdown__option--item--selected" : ""}`}
                                      {...getItemProps({
                                          key: item.value,
                                          index,
                                          item,
                                      })}
                                  >
                                      {item.value}
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            )}
        </Downshift>
    );
};
/* eslint-enable jsx-a11y/label-has-associated-control, react/jsx-key */

ReactDOM.render(<App />, document.getElementById("app"));
