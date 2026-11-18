import clsx from "clsx";
import React, {
    type ChangeEvent,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import { getCounterValue } from "./counter.js";
import type { BaseTextAreaProps } from "./types.js";

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
    (props, ref) => {
        const {
            autoExpand,
            counter,
            defaultValue,
            rows = 7,
            placeholder = " ", // Mellomrommet er med vilje: :placeholder-shown lar CSS følge DOM-verdien, også ved form.reset()
            startOpen,
            style,
            value,
            "aria-invalid": ariaInvalid,
            onChange,
            trackingProps,
            label,
            ...rest
        } = props;

        const strategy = counter?.strategy ?? "characters";
        const isControlled = typeof value !== "undefined";

        const [uncontrolledValue, setUncontrolledValue] = useState(
            defaultValue ?? "",
        );
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const textAreaRef = useMemo(() => mergeRefs(internalRef, ref), [ref]);

        // Verktøy som react-hook-form kan sette verdien direkte på elementet, så vi leser den ved mount.
        useEffect(() => {
            if (!isControlled && internalRef.current) {
                setUncontrolledValue(internalRef.current.value);
            }
        }, [isControlled]);

        // Hvis feltet styres utenfra bruker vi `value`, ellers holder vi styr på verdien selv.
        const textAreaValue = isControlled ? value : uncontrolledValue;
        const textAreaValueProps = isControlled ? { value } : { defaultValue };

        const counterCurrent = getCounterValue(textAreaValue, strategy);
        const counterTotal: number = counter?.maxLength || 0;
        const progressCurrent: number = counterTotal - counterCurrent;
        const isOverLimit = Boolean(counter && counterCurrent > counterTotal);
        const invalid = Boolean(ariaInvalid || isOverLimit);

        function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
            if (!isControlled) {
                setUncontrolledValue(e.target.value);
            }

            if (onChange) {
                onChange(e);
            }
        }
        function calculatePercentage(current: number, total: number): number {
            if (current <= 0) {
                return 0;
            }
            return total === 0 ? 0 : (current * 100) / total;
        }

        return (
            <div
                className="jkl-text-area-wrapper"
                data-invalid={invalid}
                data-has-content={counterCurrent > 0}
            >
                <textarea
                    aria-invalid={invalid}
                    className={clsx("jkl-text-area__text-area", {
                        "jkl-text-area__text-area--auto-expand": autoExpand,
                    })}
                    onChange={handleOnChange}
                    ref={textAreaRef}
                    style={{ ["--rows" as string]: rows, ...style }}
                    placeholder={placeholder}
                    {...textAreaValueProps}
                    {...rest}
                    data-track-component-name={COMPONENT_NAMES.TextArea}
                    data-track-id={
                        trackingProps?.id ?? (label ? String(label) : undefined)
                    }
                    data-track-label={label ? String(label) : undefined}
                    data-track-rows={rows}
                    data-track-auto-expand={autoExpand}
                    {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
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
