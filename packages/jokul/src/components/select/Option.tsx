import clsx from "clsx";
import {
    type ComponentPropsWithoutRef,
    type RefObject,
    type MouseEvent,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
} from "react";
import type { ValuePair } from "../../utilities/valuePair.js";
import { Flex } from "../flex/Flex.js";
import { Text } from "../typography/Text.js";

export type OptionProps = Omit<
    ComponentPropsWithoutRef<"button">,
    "aria-selected" | "children" | "role" | "type" | "value"
> &
    ValuePair & {
        multiple?: boolean;
        selected?: boolean;
        selectRef: RefObject<HTMLSelectElement>;
    };

export const Option = forwardRef<HTMLButtonElement, OptionProps>(
    function Option(props, ref) {
        const {
            className = "",
            multiple = false,
            selected = false,
            selectRef,
            label,
            description,
            media,
            value,
            ...rest
        } = props;

        const mediaRef = useRef<HTMLSpanElement>(null);
        const labelRef = useRef<HTMLSpanElement>(null);

        const syncValueToSelect = useCallback(
            (event: KeyboardEvent | MouseEvent) => {
                const button = (
                    event.target as HTMLElement
                ).closest<HTMLButtonElement>("button");
                if (!button || !selectRef.current || selectRef.current.disabled)
                    return;

                const option = Array.from(selectRef.current.options).find(
                    (option) => option.value === button.value,
                );
                if (!option) return;

                option.selected = multiple ? !option.selected : true;
                selectRef.current.dispatchEvent(
                    new Event("change", { bubbles: true }),
                );
            },
            [selectRef, multiple],
        );

        useEffect(() => {
            if (!media || !labelRef.current || !mediaRef.current) return;
            const labelElement = labelRef.current;
            const mediaElement = mediaRef.current;
            const observer = new ResizeObserver(() => {
                mediaElement.style.setProperty(
                    "--media-size",
                    `${labelElement.offsetHeight}px`,
                );
            });
            observer.observe(labelElement);
            return () => observer.disconnect();
        }, [media]);

        return (
            <button
                ref={ref}
                // biome-ignore lint/a11y/useSemanticElements: vi kan ikke style option-elementet
                role="option"
                type="button"
                className={clsx("jkl-option", className)}
                value={value}
                data-multiple={multiple || undefined}
                aria-selected={selected}
                {...rest}
                onClick={(event) => {
                    rest.onClick?.(event);
                    syncValueToSelect(event);
                }}
            >
                <Flex
                    as="span"
                    direction="column"
                    gap="4"
                    className="jkl-option__label"
                    ref={labelRef}
                >
                    <Text short as="span">
                        {label}
                    </Text>
                    {description && (
                        <Text short subdued as="span" size="xs">
                            {description}
                        </Text>
                    )}
                </Flex>
                {media && (
                    <span className="jkl-option__media" ref={mediaRef}>
                        {media}
                    </span>
                )}
            </button>
        );
    },
);
