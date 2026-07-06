import clsx from "clsx";
import {
    type CSSProperties,
    type ComponentPropsWithoutRef,
    type KeyboardEvent,
    forwardRef,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useListNavigation } from "../../hooks/index.js";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { type ValuePair, getValuePair } from "../../utilities/valuePair.js";
import { Button } from "../button/Button.jsx";
import { Flex } from "../flex/Flex.js";
import { ArrowDownIcon } from "../icon/index.js";
import { InputGroup } from "../input-group/InputGroup.jsx";
import type { InputGroupProps } from "../input-group/types.js";
import { Search } from "../search/Search.jsx";
import { Title } from "../typography/Title.jsx";
import { Option } from "./Option.jsx";

type Props = Omit<InputGroupProps, "children" | "inline"> &
    Omit<ComponentPropsWithoutRef<"select">, "size" | "children"> & {
        width?: string;
        items: (string | ValuePair)[];
        placeholder?: string;
        searchable?:
            | boolean
            | ((filter: string, item: string | ValuePair) => boolean);
    };

const autofocus = (active: boolean) => (el: HTMLElement | null) => {
    if (el) el.autofocus = active;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
    function Select(props, ref) {
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
            items,
            searchable = false,
            multiple = false,
            placeholder,
            width,
            ...elementProps
        } = props;

        const valuePairs = items.map(getValuePair);

        const popoverRef = useRef<HTMLDivElement>(null);
        const selectRef = useRef<HTMLSelectElement>(null);
        const unifiedRef = mergeRefs(ref, selectRef);

        const baseId = useId().replaceAll(":", "_");
        const popoverId = `${baseId}-popover`;
        const selectId = idProp ?? `${baseId}-select`;

        const [filter, setFilter] = useState("");
        const [selected, setSelected] = useState<Set<string>>(new Set());

        const isSearchable = searchable !== false && searchable !== undefined;

        useListNavigation({ ref: popoverRef, disableTypeahead: isSearchable });

        const filterFn: (pair: ValuePair) => boolean =
            typeof searchable === "function"
                ? (pair) =>
                      searchable(
                          filter,
                          items[valuePairs.indexOf(pair)] ?? pair,
                      )
                : (pair) =>
                      pair.label.toLowerCase().includes(filter.toLowerCase());

        const filteredPairs =
            isSearchable && filter ? valuePairs.filter(filterFn) : valuePairs;

        const showPlaceholder =
            selected.size === 0 || (selected.size === 1 && selected.has(""));
        const placeholderText = placeholder || "Ingen valgt";
        const buttonText =
            selected.size === 1
                ? (valuePairs.find((p) => selected.has(p.value))?.label ??
                  placeholderText)
                : `${selected.size} valgt`;

        // biome-ignore lint/correctness/useExhaustiveDependencies: Vi vil rerendre dersom multiple endres
        useLayoutEffect(() => {
            const select = selectRef.current;
            const popover = popoverRef.current;
            if (!select) return;

            const syncSelected = () => {
                setSelected(
                    new Set(
                        Array.from(select.selectedOptions).map((o) => o.value),
                    ),
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
        }, [multiple]);

        const delegateClick = (event: KeyboardEvent | React.MouseEvent) => {
            const input = (event.target as HTMLElement).closest<
                HTMLButtonElement | HTMLInputElement
            >("button, input");
            if (!input || !selectRef.current) return;

            const option = selectRef.current.querySelector<HTMLOptionElement>(
                `option[value="${input.value}"]`,
            );
            if (!option) return;

            option.selected = !option.selected;
            selectRef.current.dispatchEvent(
                new Event("change", { bubbles: true }),
            );
        };

        return (
            <InputGroup
                label={label}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                labelProps={labelProps}
                supportLabelProps={supportLabelProps}
                tooltip={tooltip}
                description={description}
                style={style}
                className={clsx("jkl-select", className)}
                render={(inputProps) => (
                    <div>
                        <button
                            className="jkl-select__button"
                            // @ts-ignore
                            popovertarget={popoverId}
                            type="button"
                            style={{ "--width": width } as CSSProperties}
                        >
                            {showPlaceholder ? placeholderText : buttonText}
                            <ArrowDownIcon />
                        </button>
                        <Flex
                            direction="column"
                            gap="none"
                            // biome-ignore lint/a11y/useSemanticElements: Vi reimplementerer select
                            role="listbox"
                            ref={popoverRef}
                            // @ts-ignore
                            popover="auto"
                            id={popoverId}
                        >
                            <Flex direction="column" gap="8" as="fieldset">
                                <Title
                                    size="m"
                                    as="legend"
                                    className="jkl-spacing-16--bottom"
                                >
                                    {label}
                                </Title>
                                {isSearchable && (
                                    <Search
                                        value={filter}
                                        onChange={(e) =>
                                            setFilter(e.target.value)
                                        }
                                        ref={autofocus(isSearchable)}
                                        autoComplete="none"
                                        labelProps={{ srOnly: true }}
                                        label="Søk"
                                        placeholder="Søk..."
                                        name="sok"
                                        width="100%"
                                        className="jkl-spacing-8--bottom"
                                    />
                                )}
                                {filteredPairs.map((pair, index) => (
                                    <Option
                                        as="button"
                                        role="option"
                                        type="button"
                                        {...pair}
                                        key={pair.value}
                                        aria-selected={selected.has(pair.value)}
                                        multiple={multiple}
                                        onClick={delegateClick}
                                        // @ts-ignore
                                        popovertarget={
                                            multiple ? undefined : popoverId
                                        }
                                        popovertargetaction={
                                            multiple ? undefined : "close"
                                        }
                                        ref={autofocus(
                                            !isSearchable && index === 0,
                                        )}
                                    />
                                ))}
                            </Flex>
                            <Button
                                type="button"
                                variant="primary"
                                // @ts-ignore
                                popovertarget={popoverId}
                                popovertargetaction="close"
                            >
                                Bekreft
                            </Button>
                        </Flex>
                        <select
                            defaultValue={
                                !multiple && placeholder ? "" : undefined
                            }
                            className="jkl-multiselect"
                            {...elementProps}
                            {...inputProps}
                            multiple={multiple}
                            id={selectId}
                            ref={unifiedRef}
                        >
                            {!multiple && placeholder && (
                                <option value="" disabled>
                                    {placeholder}
                                </option>
                            )}
                            {valuePairs.map((pair) => (
                                <option key={pair.value} value={pair.value}>
                                    {pair.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            />
        );
    },
);
