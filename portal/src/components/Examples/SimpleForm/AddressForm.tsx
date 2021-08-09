import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "../../../../../doc-utils";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { InfoMessage } from "@fremtind/jkl-message-box-react";

import "./AddressForm.scss";
import { Select } from "@fremtind/jkl-select-react";

interface Props {
    onSubmit: (arg0: boolean) => void;
}

const AddressForm: React.FC<Props> = ({ onSubmit }) => {
    const [showNext, setShowNext] = useState(true);
    const { darkMode, isCompact } = useContext(ExampleContext);
    const { register, handleSubmit, formState, watch } = useForm();
    const ref = useRef<HTMLFormElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);

    useScrollIntoView({ ref });

    const postnummer = watch("postnummer");

    const handleChange = () => {
        setShowNext(true);
        onSubmit(false);
    };

    const submit = () => {
        setShowNext(false);
        onSubmit(true);
    };

    const postnummerInput = register("postnummer", { required: true, maxLength: 4, minLength: 4, pattern: /^[0-9]*$/ });
    const streetnameInput = register("streetName", { required: true });

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(submit)}
            style={{ position: "relative" }}
        >
            <aside style={{ position: "absolute", top: "-150px" }} ref={ref} />
            <InfoMessage
                title="Fant ikke addresse"
                fullWidth
                className={`jkl-spacing--top-${isCompact ? "3" : "4"} jkl-spacing--bottom-1`}
            >
                Vi fant ikke addressen din i vår database. Fortell oss hvor du bor.
            </InfoMessage>
            <div className="jkl-simple-form__postal-group">
                <TextInput
                    variant="large"
                    label="Postnummer"
                    className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                    errorLabel={formState.errors.postnummer ? "Du må fylle inn postnummer" : ""}
                    inverted={darkMode}
                    forceCompact={isCompact}
                    maxLength={6}
                    placeholder="4 siffer"
                    type="tel"
                    {...postnummerInput}
                    onChange={(e) => {
                        postnummerInput.onChange(e);
                        handleChange();
                    }}
                />
                <AnimatePresence>
                    {postnummer?.toString().length === 4 && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`jkl-simple-form__postal-group__area ${
                                isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"
                            }`}
                        >
                            Geilo
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {postnummer?.toString().length === 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <TextInput
                            variant="medium"
                            label="Gatenavn"
                            className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                            errorLabel={formState.errors.streetName ? "Du må fylle inn gateadresse" : ""}
                            inverted={darkMode}
                            forceCompact={isCompact}
                            type="text"
                            {...streetnameInput}
                            onChange={(e) => {
                                streetnameInput.onChange(e);
                                handleChange();
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {postnummer?.toString().length === 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} ref={numberRef}>
                        <Select
                            className={`jkl-simple-form__postal-group__house-number ${
                                isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"
                            }`}
                            items={["1", "3", "5", "7", "9"]}
                            label="Nummer"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {showNext && (
                <PrimaryButton
                    forceCompact={isCompact}
                    inverted={darkMode}
                    className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                >
                    Gå videre
                </PrimaryButton>
            )}
        </motion.form>
    );
};

export default AddressForm;
