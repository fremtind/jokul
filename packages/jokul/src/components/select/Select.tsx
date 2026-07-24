import clsx from "clsx";
import {
    type CSSProperties,
    type ComponentPropsWithoutRef,
    type KeyboardEvent,
    type FocusEvent,
    forwardRef,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useListNavigation } from "../../hooks/index.js";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { type ValuePair, getValuePair } from "../../utilities/valuePair.js";
import { Button } from "../button/Button.js";
import { Flex } from "../flex/Flex.js";
import { ArrowDownIcon, CloseIcon } from "../icon/index.js";
import { InputGroup } from "../input-group/InputGroup.js";
import type { InputGroupProps } from "../input-group/types.js";
import { Search } from "../search/Search.js";
import { Text } from "../typography/Text.js";
import { Title } from "../typography/Title.js";
import { Option } from "./Option.js";
import { autofocus, getButtonText, getReactNodeText } from "./utils.js";
import type { DataTestAutoId } from "../../utilities/types.js";

export type SelectProps = Omit<InputGroupProps, "children" | "inline"> &
    DataTestAutoId &
    Omit<ComponentPropsWithoutRef<"select">, "size" | "children"> & {
        width?: string;
        items: (string | ValuePair)[];
        placeholder?: string;
    } & (
        | {
              searchable: true;
              onSearch?: (searchTerm: string) => void;
              filterFunction?: (item: ValuePair, searchTerm: string) => boolean;
          }
        | {
              searchable?: false;
              onSearch?: never;
              filterFunction?: never;
          }
    );

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    function Select(props, externalRef) {
        const {
            label,
            errorLabel,
            helpLabel,
            labelProps,
            supportLabelProps,
            tooltip,
            description,
            style,
            className,
            id: idProp,
            items: rawItems,
            multiple = false,
            searchable = false,
            onSearch,
            filterFunction,
            placeholder,
            width,
            value,
            "data-testautoid": dataTestautoid,
            "data-size": size,
            ...elementProps
        } = props;

        const popoverRef = useRef<HTMLDivElement>(null);
        const selectRef = useRef<HTMLSelectElement>(null);
        const unifiedRef = mergeRefs(externalRef, selectRef);

        const baseId = `jkl-select-${useId()}`;
        const selectId = idProp ?? baseId;
        const popoverId = `${selectId}-popover`;

        const [filter, setFilter] = useState("");
        const [selected, setSelected] = useState(() => new Set<string>());

        useListNavigation({ ref: popoverRef, disableTypeahead: searchable });

        const items = rawItems.map(getValuePair);
        const filteredItems =
            searchable && filter
                ? items.filter((item) =>
                      filterFunction
                          ? filterFunction(item, filter)
                          : item.label
                                .toLowerCase()
                                .includes(filter.toLowerCase()),
                  )
                : items;

        const showPlaceholder =
            selected.size === 0 || (selected.size === 1 && placeholder && selected.has(""));
        const placeholderText = placeholder || "Ingen valgt";
        const buttonText = getButtonText(selected, items, placeholderText);

        /**
         * Setter event-lyttere for å synkronisere verdier i det skjulte select-elementet med
         * visningen i vår komponent, samt nullstilling av filter når menyen lukkes.
         */
        // biome-ignore lint/correctness/useExhaustiveDependencies:
        useLayoutEffect(() => {
            const select = selectRef.current;
            const popover = popoverRef.current;
            if (!select) return;

            const syncSelected = () => {
                setSelected(
                    new Set(Array.from(select.selectedOptions, (o) => o.value)),
                );
            };

            const resetFilterOnClose = (event: ToggleEvent) => {
                if (event.newState === "closed") setFilter("");
            };

            syncSelected();
            popover?.addEventListener("toggle", resetFilterOnClose);
            select.addEventListener("change", syncSelected);

            return () => {
                select.removeEventListener("change", syncSelected);
                popover?.removeEventListener("toggle", resetFilterOnClose);
            };
        }, [multiple, rawItems]);

        // biome-ignore lint/correctness/useExhaustiveDependencies: Oppdaterer visning når value settes
        useLayoutEffect(() => {
            setSelected(
                new Set(
                    Array.from(
                        selectRef.current?.selectedOptions ?? [],
                        (o) => o.value,
                    ),
                ),
            );
        }, [value, elementProps.defaultValue]);

        /**
         * Sørger for at menyen kan åpnes med piltastene slik som i native select
         */
        const openWithArrows = (event: KeyboardEvent) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                popoverRef.current?.showPopover?.();
            }
        };

        /**
         * Fyrer av focus- eller blur-event på det skjulte select-elementet når
         * fokus går inn eller ut av komponenten, slik at f.eks. react-hook-form
         * oppdaterer sin state riktig.
         */
        const syncFocus = (event: FocusEvent) => {
            const sel = selectRef.current;
            if (!popoverRef.current?.contains(event.relatedTarget)) {
                if (!sel) return;
                if (["focus", "focusin"].includes(event.type)) {
                    sel.dispatchEvent(new Event("focusin", { bubbles: true }));
                    sel.dispatchEvent(new Event("focus", { bubbles: true }));
                } else if (["blur", "focusout"].includes(event.type)) {
                    sel.dispatchEvent(new Event("focusout", { bubbles: true }));
                    sel.dispatchEvent(new Event("blur", { bubbles: true }));
                }
            }
        };

        return (
            <InputGroup
                id={selectId}
                label={label}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                labelProps={labelProps}
                supportLabelProps={supportLabelProps}
                tooltip={tooltip}
                description={description}
                style={style}
                data-testautoid={dataTestautoid}
                data-size={size}
                className={clsx("jkl-select", className)}
                render={(inputProps) => (
                    <>
                        <button
                            aria-label={`${showPlaceholder ? placeholderText : buttonText}, ${getReactNodeText(label)}`}
                            className="jkl-select__button"
                            data-testid="jkl-select__button"
                            disabled={elementProps.disabled}
                            type="button"
                            // @ts-ignore
                            popovertarget={popoverId}
                            style={{ "--width": width } as CSSProperties}
                            onKeyDown={openWithArrows}
                            onFocus={syncFocus}
                            onBlur={syncFocus}
                            {...inputProps}
                        >
                            {showPlaceholder ? placeholderText : buttonText}
                            <ArrowDownIcon />
                        </button>
                        <Flex
                            direction="column"
                            gap="16"
                            ref={popoverRef}
                            // @ts-ignore
                            popover="auto"
                            id={popoverId}
                            className="jkl-select__popover"
                            aria-label={getReactNodeText(label)}
                        >
                            <Flex
                                as="header"
                                alignItems="start"
                                justifyContent="space-between"
                                gap="8"
                            >
                                <Title
                                    size="m"
                                    as="h3"
                                    id={`${selectId}-title`}
                                >
                                    {label}
                                </Title>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    icon={<CloseIcon />}
                                    aria-label="Lukk"
                                    // @ts-ignore
                                    popovertarget={popoverId}
                                    popovertargetaction="hide"
                                />
                            </Flex>
                            {searchable && (
                                <Search
                                    value={filter}
                                    onChange={(e) => {
                                        setFilter(e.target.value);
                                        onSearch?.(e.target.value);
                                    }}
                                    ref={autofocus(searchable)}
                                    autoComplete="off"
                                    labelProps={{ srOnly: true }}
                                    label="Søk"
                                    placeholder="Søk..."
                                    width="100%"
                                    className="jkl-spacing-8--bottom"
                                />
                            )}
                            <Flex
                                direction="column"
                                gap="8"
                                // biome-ignore lint/a11y/useSemanticElements: Vi reimplementerer select
                                role="listbox"
                                aria-multiselectable={multiple}
                                aria-labelledby={`${selectId}-title`}
                            >
                                {filteredItems.map((pair, index) => (
                                    <Option
                                        {...pair}
                                        key={pair.value}
                                        selected={selected.has(pair.value)}
                                        multiple={multiple}
                                        selectRef={selectRef}
                                        // @ts-ignore
                                        popovertarget={
                                            multiple ? undefined : popoverId
                                        }
                                        popovertargetaction={
                                            multiple ? undefined : "hide"
                                        }
                                        ref={autofocus(() => {
                                            if (searchable) return false;
                                            if (showPlaceholder)
                                                return index === 0;
                                            return (
                                                selected.has(pair.value) &&
                                                filteredItems.findIndex((p) =>
                                                    selected.has(p.value),
                                                ) === index
                                            );
                                        })}
                                    />
                                ))}
                                {searchable && !filteredItems.length && (
                                    <Text short>Ingen treff</Text>
                                )}
                            </Flex>
                            {multiple && (
                                <Button
                                    type="button"
                                    variant="primary"
                                    // @ts-ignore
                                    popovertarget={popoverId}
                                    popovertargetaction="hide"
                                >
                                    Bekreft
                                </Button>
                            )}
                        </Flex>
                        <select
                            defaultValue={
                                !multiple && value === undefined && placeholder
                                    ? ""
                                    : undefined
                            }
                            {...elementProps}
                            tabIndex={-1}
                            value={value}
                            multiple={multiple}
                            ref={unifiedRef}
                            aria-labelledby={inputProps.id}
                        >
                            {!multiple && placeholder && (
                                <option value="" disabled>
                                    {placeholder}
                                </option>
                            )}
                            {items.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </>
                )}
            />
        );
    },
);

Select.displayName = "Select";
