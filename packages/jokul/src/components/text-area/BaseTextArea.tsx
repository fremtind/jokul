import React, {
    ChangeEvent,
    type FocusEvent,
    forwardRef,
    type RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { BaseTextAreaProps } from "./types.js";

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
    (props, ref) => {
        const {
            autoExpand,
            counter,
            onBlur,
            onFocus,
            rows = 7,
            placeholder = " ", // This space intentionally left blank. Denne + rows trengs for å få den ekspanderende effekten.
            startOpen,
            style,
            value,
            "aria-invalid": ariaInvalid,
            onChange,
            ...rest
        } = props;

        const [counterCurrent, setCounterCurrent] = useState(() => {
            if (typeof value === "undefined") {
                return 0;
            } else if (typeof value === "number") {
                return String(value).length;
            } else {
                return value.length;
            }
        });
        const [textAreaFocused, setTextAreaFocused] = useState(false);
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const textAreaRef =
            (ref as RefObject<HTMLTextAreaElement>) || internalRef;

        useEffect(() => {
            const textAreaElement = textAreaRef.current;
            if (textAreaElement) {
                if (!autoExpand) {
                    textAreaElement.style.height = "";
                    return;
                }

                if (textAreaFocused || value) {
                    textAreaElement.style.height = "auto"; // Sett til auto før scrollhøyden leses, sånn at redusering av høyde ved sletting av tekst fungerer
                    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`;
                } else {
                    textAreaElement.style.height = "";
                }
            }
        }, [autoExpand, textAreaRef, value, textAreaFocused]);

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

        const counterTotal: number = counter?.maxLength || 0;
        const progressCurrent: number = counterTotal - counterCurrent;
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

        return (
            <div
                className="jkl-text-area-wrapper"
                data-invalid={invalid}
                data-has-content={counterCurrent > 0}
            >
                <textarea
                    aria-invalid={invalid}
                    className={`jkl-text-area__text-area jkl-text-area__text-area--${rows}-rows`}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    onChange={handleOnChange}
                    ref={textAreaRef}
                    style={{ ...style, ...overflowStyle }}
                    placeholder={placeholder}
                    value={value}
                    {...rest}
                />
                {counter && (
                    <div className="jkl-text-area__counter" aria-hidden="true">
                        <div className="jkl-text-area__counter-count">
                            {counterCurrent}&nbsp;/&nbsp;{counterTotal}
                        </div>
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
