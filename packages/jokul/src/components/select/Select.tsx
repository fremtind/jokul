import clsx from "clsx";
import { useEffect, useId, useState } from "react";
import type { ValuePair } from "../../utilities/index.js";
import { Card } from "../card/index.js";
import { Flex } from "../flex/index.js";
import { InputGroup } from "../input-group/InputGroup.js";
import { Loader } from "../loader/index.js";
import Popover from "../popover/Popover.js";
import { Search } from "../search/Search.js";
import { Text } from "../typography/Text.js";
import type { SelectProps } from "./types.js";

function normalizeItems(items: SelectProps["items"]): Array<ValuePair> {
    return items.map((item) =>
        typeof item === "string" ? { value: item, label: item } : item,
    );
}

export const Select = (props: SelectProps) => {
    const {
        id,
        name,
        items,
        value,
        label,
        onChange,
        onBlur,
        onFocus,
        className,
        errorLabel,
        onSearch,
        loading = false,
        multiple = false,
        searchable = false,
        ...rest
    } = props;

    const listId = useId();
    const labelId = `${listId}_label`;
    const searchInputId = `${listId}_search-input`;

    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState<Array<ValuePair>>(
        normalizeItems(items),
    );
    const [selectedValues, setSelectedValues] = useState<Array<ValuePair>>([]);

    useEffect(() => {
        const normalized = normalizeItems(items);
        setResults(
            onSearch
                ? normalized
                : normalized.filter((item) =>
                      item.label
                          .toLowerCase()
                          .includes(searchValue.toLowerCase()),
                  ),
        );
    }, [items, searchValue, onSearch]);

    useEffect(() => {
        if (value) {
            const selectedItem = normalizeItems(items).find(
                (item) => item.value === value,
            );
            if (selectedItem) {
                setSelectedValues([selectedItem]);
            }
        }
    }, [value, items]);

    return (
        <InputGroup
            id={id}
            data-testid="jkl-select"
            className={clsx("jkl-select", className)}
            label={label}
            {...rest}
            errorLabel={errorLabel}
            render={({ "aria-invalid": ariaInvalid, ...inputProps }) => {
                return (
                    <>
                        {!multiple && (
                            <input
                                type="hidden"
                                name={name}
                                value={selectedValues[0]?.value ?? ""}
                            />
                        )}
                        {multiple &&
                            selectedValues.map((v) => (
                                <input
                                    key={v.value}
                                    type="hidden"
                                    name={name}
                                    value={v.value}
                                />
                            ))}
                        <Popover placement="bottom-end" modal={false}>
                            <Popover.Trigger
                                aria-invalid={ariaInvalid}
                                {...inputProps}
                                type="button"
                                name={`${name}-btn`}
                                className={clsx("jkl-select__trigger")}
                                data-testid="jkl-select__button"
                            >
                                <Text
                                    as="span"
                                    subdued={!selectedValues.length}
                                >
                                    {!selectedValues.length
                                        ? "Velg"
                                        : selectedValues.length === 1
                                          ? selectedValues[0].label
                                          : `${selectedValues.length} valgt`}
                                </Text>
                            </Popover.Trigger>
                            <Popover.Content
                                returnFocus={true}
                                padding={16}
                                className="jkl-select__dropdown"
                            >
                                {searchable && (
                                    <Search
                                        {...inputProps}
                                        aria-invalid={ariaInvalid}
                                        id={searchInputId}
                                        placeholder="Søk"
                                        value={searchValue}
                                        className="jkl-select__dropdown__search"
                                        onChange={(e) => {
                                            setSearchValue(e.target.value);
                                            if (onSearch) {
                                                onSearch(e.target.value);
                                            }
                                        }}
                                        data-testid="jkl-select__search-input"
                                    />
                                )}
                                {loading && (
                                    <Card
                                        padding="l"
                                        className="jkl-select__dropdown__loading-indicator"
                                    >
                                        <Flex
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Loader textDescription="Henter resultater..." />
                                        </Flex>
                                    </Card>
                                )}
                                {!loading && (
                                    <fieldset
                                        id={listId}
                                        aria-labelledby={labelId}
                                        tabIndex={-1}
                                        data-testid="jkl-select__dropdown__listbox"
                                    >
                                        <legend
                                            id={labelId}
                                            className="jkl-sr-only"
                                        >
                                            {label}
                                        </legend>
                                        {results.map((item) => (
                                            <label
                                                key={item.value}
                                                className="jkl-select__dropdown__listbox__option"
                                            >
                                                <input
                                                    type={
                                                        multiple
                                                            ? "checkbox"
                                                            : "radio"
                                                    }
                                                    name={name}
                                                    aria-label={item.label}
                                                    value={item.value}
                                                    onChange={(e) => {
                                                        const newSelectedValues =
                                                            multiple
                                                                ? e.target
                                                                      .checked
                                                                    ? [
                                                                          ...selectedValues,
                                                                          item,
                                                                      ]
                                                                    : selectedValues.filter(
                                                                          (
                                                                              selectedItem,
                                                                          ) =>
                                                                              selectedItem.value !==
                                                                              item.value,
                                                                      )
                                                                : [item];

                                                        setSelectedValues(
                                                            newSelectedValues,
                                                        );
                                                        onChange?.(
                                                            multiple
                                                                ? newSelectedValues.map(
                                                                      (v) =>
                                                                          v.value,
                                                                  )
                                                                : (newSelectedValues[0]
                                                                      ?.value ??
                                                                      ""),
                                                        );
                                                    }}
                                                    checked={selectedValues.some(
                                                        (selectedItem) =>
                                                            selectedItem.value ===
                                                            item.value,
                                                    )}
                                                />
                                                <Text
                                                    className="jkl-select__dropdown__listbox__option__text"
                                                    size="s"
                                                >
                                                    <Text as="span">
                                                        {item.label}
                                                    </Text>
                                                    {item.description && (
                                                        <Text subdued as="span">
                                                            {item.description}
                                                        </Text>
                                                    )}
                                                </Text>
                                                {item.media && (
                                                    <div
                                                        aria-hidden="true"
                                                        className="jkl-select__dropdown__listbox__option__media"
                                                    >
                                                        {item.media}
                                                    </div>
                                                )}
                                            </label>
                                        ))}
                                    </fieldset>
                                )}
                            </Popover.Content>
                        </Popover>
                    </>
                );
            }}
        />
    );
};

Select.displayName = "Select";
