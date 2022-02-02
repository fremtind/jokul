import React, { forwardRef, FocusEvent, useRef, useState, useEffect, RefObject } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import { BaseProps } from "./BaseInputField";

type Counter = {
    /** Antall tegn før telleren når maksimum og vi viser en feilmelding */
    maxLength: number;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
};

export interface Props extends BaseProps {
    /**
     * Viser en teller i tekstfeltet når det har fokus.
     * Denne er ulik den innebyggede maxLength i at den ikke setter en
     * stopper for å gå over grensen, slik at brukeren kan fullføre en
     * tankerekke.
     */
    counter?: Counter;
    /** @deprecated Foretrekk counter-propen sin maxLength for å la brukerne fullføre en tankerekke før de redigerer seg innenfor maksgrensen */
    maxLength?: number;
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    /** @deprecated */
    inverted?: boolean;
    forceCompact?: boolean;
    /** Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til. */
    rows?: number;
    inline?: boolean;
    startOpen?: boolean;
    /** Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle */
    autoExpand?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const {
        counter,
        id,
        variant,
        inverted,
        label,
        className,
        helpLabel,
        errorLabel,
        rows = 7,
        inline = false,
        placeholder = " ",
        autoExpand = false,
        startOpen = false,
        forceCompact = false,
        ...restProps
    } = props;

    const componentClassName = classNames("jkl-text-input jkl-text-area", className, {
        "jkl-text-area--start-open": startOpen,
        "jkl-text-area--with-counter": typeof counter !== "undefined",
        "jkl-text-input--compact": forceCompact,
        "jkl-text-input--inverted": inverted,
    });
    const [uid] = useState(id || `jkl-text-area-${nanoid(8)}`);
    const [supportId] = useState(`jkl-support-label-${nanoid(8)}`);

    const [textAreaFocused, setTextAreaFocused] = useState(false);
    const [baseScrollHeight, setBaseScrollHeight] = useState(0);
    const [currentRows, setCurrentRows] = useState(1);
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textAreaRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (autoExpand && textAreaElement) {
            const savedValue = textAreaElement.value;
            const savedPlaceholder = textAreaElement.placeholder;
            const savedRows = textAreaElement.rows;
            // BaseScrollHeight must be calculated from an empty textarea and empty placeholder.
            textAreaElement.value = "";
            textAreaElement.placeholder = "";
            textAreaElement.rows = 1;
            setBaseScrollHeight(textAreaElement.scrollHeight);
            textAreaElement.value = savedValue;
            textAreaElement.placeholder = savedPlaceholder;
            textAreaElement.rows = savedRows;
        }
    }, [textAreaRef, autoExpand]);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        const minimumRows = rows;

        if (textAreaElement) {
            const calculatedRows = calculateRows(textAreaElement, baseScrollHeight);
            if (textAreaFocused || restProps.value) {
                setCurrentRows(Math.max(minimumRows, calculatedRows));
            } else {
                setCurrentRows(calculatedRows);
            }
        }
    }, [textAreaRef, restProps.value, textAreaFocused, baseScrollHeight, rows]);

    function onFocus(e: FocusEvent<HTMLTextAreaElement>) {
        setTextAreaFocused(true);
        restProps.onFocus && restProps.onFocus(e);
    }

    function onBlur(e: FocusEvent<HTMLTextAreaElement>) {
        setTextAreaFocused(false);
        restProps.onBlur && restProps.onBlur(e);
    }

    function calculateRows(textAreaElement: HTMLTextAreaElement, baseScrollHeight: number) {
        const lineHeightWithPx = window ? window.getComputedStyle(textAreaElement).lineHeight : "16px"; // Default to 16px
        const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
        const savedRows = textAreaElement.rows;
        // We need to set rows to 1 to shrink the textarea when removing characters.
        textAreaElement.rows = 1;
        const calculatedRows = Math.ceil((textAreaElement.scrollHeight - baseScrollHeight) / lineHeight) + 1;
        textAreaElement.rows = savedRows;
        return calculatedRows;
    }

    const counterCurrent: number = textAreaRef.current?.value.length || 0;
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
    const hasSupportText = helpLabel || counterLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

    return (
        <div data-testid="jkl-text-area" className={componentClassName}>
            <Label standAlone htmlFor={uid} srOnly={inline} variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            {!counter && (
                <textarea
                    id={uid}
                    ref={textAreaRef}
                    className={`jkl-text-input__input jkl-text-input__input--${rows}-rows`}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={!!errorLabel}
                    aria-describedby={describedBy}
                    placeholder={placeholder}
                    rows={autoExpand ? currentRows : undefined}
                    // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
                    style={autoExpand ? { height: "auto", overflowX: "hidden" } : undefined}
                    {...restProps}
                />
            )}
            {counter && (
                <div className="jkl-text-area__content">
                    <div
                        className="jkl-text-input__input"
                        aria-invalid={Boolean(errorLabel || counterLabel)}
                        data-has-content={counterCurrent > 0}
                    >
                        <textarea
                            id={uid}
                            ref={textAreaRef}
                            className={`jkl-text-area__text-area jkl-text-input__input--${rows}-rows`}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            aria-describedby={describedBy}
                            aria-invalid={Boolean(errorLabel || counterLabel)}
                            placeholder={placeholder}
                            rows={autoExpand ? currentRows : undefined}
                            // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
                            style={autoExpand ? { height: "auto", overflowX: "hidden" } : undefined}
                            {...restProps}
                        />
                    </div>
                    <div
                        className="jkl-text-area__counter"
                        aria-live="polite"
                        aria-label={`${counterCurrent} av ${counterTotal} tegn brukt`}
                    >
                        <div className="jkl-text-area__counter-count" aria-hidden="true">
                            {counterCurrent}&nbsp;/&nbsp;{counterTotal}
                        </div>
                        {!counter.hideProgress && (
                            <div
                                className="jkl-text-area__counter-progress"
                                aria-hidden="true"
                                style={{
                                    ["--progress-width" as string]: `${calculatePercentage(
                                        progressCurrent,
                                        counterTotal,
                                    )}%`,
                                }}
                            />
                        )}
                    </div>
                </div>
            )}
            <SupportLabel
                inverted={inverted}
                id={supportId}
                helpLabel={helpLabel}
                errorLabel={errorLabel || counterLabel}
                forceCompact={forceCompact}
            />
        </div>
    );
});

TextArea.displayName = "TextArea";
