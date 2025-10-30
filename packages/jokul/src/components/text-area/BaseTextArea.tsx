import clsx from "clsx";
import React, {
    type ChangeEvent,
    type FocusEvent,
    forwardRef,
    type RefObject,
    useEffect,
    useId,
    useRef,
    useState,
} from "react";
import type { BaseTextAreaProps } from "./types.js";

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
    (props, ref) => {
        const {
            autoExpand,
            counter,
            onBlur,
            onFocus,
            rows = 4,
            placeholder,
            style,
            value,
            "aria-invalid": ariaInvalid,
            "aria-describedby": ariaDescribedBy,
            onChange,
            startOpen,
            ...rest
        } = props;

        const [counterCurrent, setCounterCurrent] = useState(() => {
            if (typeof value === "undefined") {
                return 0;
            }

            if (typeof value === "number") {
                return String(value).length;
            }

            return value.length;
        });
        const [textAreaFocused, setTextAreaFocused] = useState(false);
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const textAreaRef =
            (ref as RefObject<HTMLTextAreaElement>) || internalRef;

        // biome-ignore lint/correctness/useExhaustiveDependencies: counterCurrent trengs for å lytte på tekstendringer i textarea for auto-expand funksjonalitet
        useEffect(() => {
            const textAreaElement = textAreaRef.current;
            if (textAreaElement) {
                if (!autoExpand) {
                    textAreaElement.style.removeProperty("--textarea-height");
                    return;
                }

                if (textAreaFocused || value) {
                    textAreaElement.style.setProperty(
                        "--textarea-height",
                        "auto",
                    ); // Sett til auto før scrollhøyden leses, sånn at redusering av høyde ved sletting av tekst fungerer
                    textAreaElement.style.setProperty(
                        "--textarea-height",
                        `${textAreaElement.scrollHeight}px`,
                    );
                } else {
                    textAreaElement.style.setProperty(
                        "--textarea-height",
                        "auto",
                    );
                }
            }
        }, [
            autoExpand,
            textAreaRef,
            value,
            textAreaFocused,
            counterCurrent,
            rows,
        ]);

        function handleOnFocus(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(true);
            if (onFocus) {
                onFocus(e);
            }
        }

        function handleOnBlur(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(false);
            if (onBlur) {
                onBlur(e);
            }
        }

        function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
            setCounterCurrent(e.target.value.length);
            if (onChange) {
                onChange(e);
            }
        }

        function handleCounterClick() {
            textAreaRef.current?.focus();
        }

        const counterTotal: number = counter?.maxLength || 0;
        const progressCurrent: number = counterCurrent;

        function calculatePercentage(current: number, total: number): number {
            if (current <= 0) {
                return 0;
            }
            return total === 0 ? 0 : (current * 100) / total;
        }

        const counterLabel =
            counter && counterCurrent > counterTotal
                ? `Du har skrevet ${counterCurrent - counterTotal} tegn for mye`
                : undefined;

        const invalid = Boolean(ariaInvalid || counterLabel);

        const overflowStyle = {
            overflowX: autoExpand ? "hidden" : undefined, // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
        } as React.CSSProperties;

        const maxLengthId = useId();

        const describedBy = clsx(ariaDescribedBy, {
            [maxLengthId ?? ""]: counter,
        });

        return (
            <div className="jkl-text-area-wrapper" data-invalid={invalid}>
                {counter && (
                    <p id={maxLengthId} className="jkl-sr-only">
                        Tekstområde med plass til {counterTotal} tegn
                    </p>
                )}
                <textarea
                    aria-invalid={invalid}
                    className="jkl-text-area__text-area"
                    rows={rows}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    onChange={handleOnChange}
                    ref={textAreaRef}
                    style={{ ...style, ...overflowStyle }}
                    placeholder={placeholder}
                    value={value}
                    maxLength={counter?.maxLength}
                    {...(describedBy
                        ? { "aria-describedby": describedBy }
                        : {})}
                    {...rest}
                />
                {counter && (
                    // biome-ignore lint/a11y/useKeyWithClickEvents: Counter is decorative and should not be keyboard navigable
                    <div
                        className="jkl-text-area__counter"
                        aria-hidden="true"
                        onClick={handleCounterClick}
                        style={{ cursor: "pointer" }}
                    >
                        <output
                            className="jkl-text-area__counter-count"
                            aria-hidden="true"
                        >
                            {counterCurrent}&nbsp;/&nbsp;{counterTotal}
                        </output>
                        {!counter.hideProgress && (
                            <div
                                className="jkl-text-area__counter-progress"
                                style={{
                                    ["--progress-width" as string]: `${calculatePercentage(
                                        progressCurrent,
                                        counterTotal,
                                    )}%`,
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
        );
    },
);

BaseTextArea.displayName = "BaseTextArea";
