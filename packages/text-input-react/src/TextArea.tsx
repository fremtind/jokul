import { Label, SupportLabel, LabelVariant, LabelProps, Density } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, FocusEvent, useRef, useState, useEffect, RefObject } from "react";
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
    labelProps?: Omit<LabelProps, "children" | "density" | "standAlone">;
    helpLabel?: string;
    errorLabel?: string;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    density?: Density;
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
        label,
        labelProps,
        className,
        helpLabel,
        errorLabel,
        rows = 7,
        inline = false,
        placeholder = " ",
        autoExpand = false,
        startOpen = false,
        density,
        value,
        onBlur,
        onFocus,
        ...rest
    } = props;

    const componentClassName = cn("jkl-text-input jkl-text-area", className, {
        "jkl-text-area--start-open": startOpen,
        "jkl-text-area--auto-expand": autoExpand,
        "jkl-text-area--with-counter": typeof counter !== "undefined",
    });
    const uid = useId(id || "jkl-text-area", { generateSuffix: !id });
    const supportId = useId("jkl-support-label");

    const [textAreaFocused, setTextAreaFocused] = useState(false);
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textAreaRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

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
    const style = {
        overflowX: autoExpand ? "hidden" : undefined, // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
    } as React.CSSProperties;

    return (
        <div data-testid="jkl-text-area" className={componentClassName} data-density={density}>
            <Label
                variant={variant}
                {...labelProps}
                standAlone
                srOnly={inline || labelProps?.srOnly}
                density={density}
                htmlFor={uid}
            >
                {label}
            </Label>
            {!counter && (
                <textarea
                    id={uid}
                    ref={textAreaRef}
                    className={`jkl-text-input__input jkl-text-input__input--${rows}-rows`}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    aria-invalid={!!errorLabel}
                    aria-describedby={describedBy}
                    placeholder={placeholder}
                    style={style}
                    value={value}
                    {...rest}
                />
            )}
            {counter && (
                <div className="jkl-text-area__content">
                    <div
                        className="jkl-text-input__input"
                        aria-invalid={Boolean(errorLabel || counterLabel)}
                        data-has-content={counterCurrent > 0}
                        style={style}
                    >
                        <textarea
                            id={uid}
                            ref={textAreaRef}
                            className={`jkl-text-area__text-area jkl-text-input__input--${rows}-rows`}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            aria-describedby={describedBy}
                            aria-invalid={Boolean(errorLabel || counterLabel)}
                            placeholder={placeholder}
                            style={style}
                            value={value}
                            {...rest}
                        />
                    </div>
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
                </div>
            )}
            <SupportLabel
                id={supportId}
                helpLabel={helpLabel}
                errorLabel={errorLabel || counterLabel}
                density={density}
            />
        </div>
    );
});

TextArea.displayName = "TextArea";
