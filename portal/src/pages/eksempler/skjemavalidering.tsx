import { PrimaryButton } from "@fremtind/jkl-button-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { DatePicker, formatInput, isCorrectFormat, isWithinUpperBound } from "@fremtind/jkl-datepicker-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { formatDate } from "@fremtind/jkl-formatters-util";
import { FormErrorMessageBox } from "@fremtind/jkl-message-box-react";
import { RadioButton, RadioButtonGroup } from "@fremtind/jkl-radio-button-react";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { Select } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { ToggleSlider } from "@fremtind/jkl-toggle-switch-react";
import { motion } from "framer-motion";
import { HeadProps } from "gatsby";
import React, { useRef, FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Seo } from "../../components/seo";

type FormValues = {
    u23: undefined | string;
    fodselsdato: undefined | string;
    fodselsnummer: undefined | string;
    fornavn: undefined | string;
    etternavn: undefined | string;
    stilling: undefined | string;
    klient: undefined | string[];
};

export const Head: FC<HeadProps> = () => <Seo title="Skjemavalideringseksempel" />;

const Skjemavalideringseksempel: FC = () => {
    const [value, setValue] = useState("Vanlig");

    const { formState, handleSubmit, register } = useForm<FormValues>({
        shouldFocusError: false,
    });

    /** Gjør klar props til oppsummeringen */
    const { errors: hookFormErrors, isSubmitted, isValid } = formState;
    const errors = Object.entries(hookFormErrors).flatMap(([, error]) =>
        Array.isArray(error) ? error.map((e) => e.message) : [error.message],
    );

    /**
     * Gjør klart skjemaet for scrolling til oppsummeringen av feil. Sørg for at
     * skjemaet får en fornuftig scroll-padding-top slik at alt blir synlig med
     * tilstrekkelig luft.
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top
     */
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollToErrorSummary] = useScrollIntoView({
        ref: scrollRef,
        autoScroll: false,
    });

    const onError = () => {
        scrollToErrorSummary();
        scrollRef.current?.focus();
    };

    const onSubmit = (valid: FormValues) => console.table(valid);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="jkl-portal__main jkl-spacing-xl--bottom"
        >
            <div className=" jkl-spacing-2xl--bottom">
                <h1 className="jkl-title jkl-spacing-xl--bottom">Skjema&shy;validerings&shy;eksempel</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div
                    className="jkl-portal-scroll-anchor"
                    tabIndex={-1} // Negativ TabIndex trengs for å kunne flytte fokus til elementet, så neste Tab går til første skjemafelt
                    ref={scrollRef}
                />
                <FormErrorMessageBox
                    className="jkl-portal-paragraph"
                    errors={errors}
                    isSubmitted={isSubmitted}
                    isValid={isValid}
                />
                <p className="jkl-heading-4 jkl-spacing-m--bottom">Hvem er eier av forsikringen?</p>
                <TextInput
                    {...register("fodselsnummer", {
                        required: "Du må fylle ut eierens fødselsnummer",
                        pattern: {
                            value: /^\d{11}$/,
                            message: "Fødselsnummeret må bestå av 11 siffer",
                        },
                    })}
                    className="jkl-spacing-l--bottom"
                    label="Fødselsnummer"
                    errorLabel={formState.errors.fodselsnummer?.message}
                />
                <TextInput
                    {...register("fornavn", {
                        required: "Du må fylle ut eierens fornavn",
                    })}
                    className="jkl-spacing-l--bottom"
                    autoComplete="given-name"
                    label="Fornavn"
                    errorLabel={formState.errors.fornavn?.message}
                />
                <TextInput
                    {...register("etternavn", {
                        required: "Du må fylle ut eierens etternavn",
                    })}
                    className="jkl-spacing-l--bottom"
                    autoComplete="family-name"
                    label="Etternavn"
                    errorLabel={formState.errors.etternavn?.message}
                />
                <DatePicker
                    className="jkl-spacing-l--bottom"
                    disableAfterDate={formatInput(new Date())}
                    errorLabel={formState.errors.fodselsdato?.message}
                    label="Fødselsdato"
                    {...register("fodselsdato", {
                        required: "Du må fylle ut fødselsdato",
                        validate: {
                            isCorrectFormat: (v) =>
                                isCorrectFormat(v) ||
                                `Datoen må være skrevet i formen ${formatDate(new Date())} eller kortformat`,
                            withinUpperBound: (v) =>
                                isWithinUpperBound(v, new Date()) || `Datoen må være før ${formatDate(new Date())}`,
                        },
                    })}
                />
                <Select
                    {...register("stilling", { required: "Du må oppgi eierens stilling" })}
                    className="jkl-spacing-xl--bottom"
                    errorLabel={formState.errors.stilling?.message}
                    items={["Designer", "Utvikler", "Tester", "Leder", "Annet"]}
                    label="Stilling"
                    width="14rem"
                />
                <RadioButtonGroup
                    className="jkl-spacing-l--bottom"
                    labelProps={{ variant: "small" }}
                    legend="Under 23"
                    errorLabel={formState.errors.u23?.message}
                >
                    <RadioButton
                        {...register("u23", {
                            required: "Du må oppgi om eier er under 23 år gammel",
                        })}
                        label="Ja"
                        value="y"
                    />
                    <RadioButton
                        {...register("u23", {
                            required: "Du må oppgi om eier er under 23 år gammel",
                        })}
                        label="Nei"
                        value="n"
                    />
                </RadioButtonGroup>
                <FieldGroup
                    legend="Er klient"
                    className="jkl-spacing-xl--bottom"
                    labelProps={{ variant: "small" }}
                    errorLabel={formState.errors.klient?.message}
                >
                    <Checkbox {...register("klient")} value="ja">
                        Ja
                    </Checkbox>
                </FieldGroup>
                <PrimaryButton type="submit">Gå videre</PrimaryButton>
            </form>
            <div>
                <ToggleSlider hideLegend defaultValue={value} labels={["Vanlig", "Kompakt"]} onToggle={setValue}>
                    Velg variant
                </ToggleSlider>
            </div>
            <div data-compactlayout={value === "Kompakt" ? "true" : undefined}>
                <Skjemavalideringseksempel />
            </div>
        </motion.main>
    );
};

export default Skjemavalideringseksempel;
