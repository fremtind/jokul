import React, { useContext, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "@fremtind/jkl-portal-components";
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
    const { register, handleSubmit, errors, watch } = useForm();
    const ref = useRef<HTMLFormElement>(null);
    const postnummerRef = useRef<HTMLInputElement>(null);
    const streetNameRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);

    useScrollIntoView({ ref });

    useEffect(() => postnummerRef?.current?.focus(), []);
    useEffect(() => streetNameRef?.current?.focus(), []);
    useEffect(() => numberRef?.current?.focus(), []);

    const postnummer = watch("postnummer");

    const handleChange = () => {
        setShowNext(true);
        onSubmit(false);
    };
    const submit = () => {
        setShowNext(false);
        onSubmit(true);
    };

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
                    name="postnummer"
                    className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                    errorLabel={errors.postnummer ? "Du må fylle inn postnummer" : ""}
                    inverted={darkMode}
                    forceCompact={isCompact}
                    maxLength={6}
                    placeholder="4 siffer"
                    type="tel"
                    onChange={handleChange}
                    ref={(e) => {
                        // @ts-ignore:: should be improved, temporarily escaped
                        register(e, { required: true, maxLength: 4, minLength: 4, pattern: /^[0-9]*$/ });
                        // @ts-ignore:: should be improved, temporarily escaped
                        postnummerRef.current = e;
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
                            name="streetName"
                            className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                            errorLabel={errors.streetName ? "Du må fylle inn gateadresse" : ""}
                            inverted={darkMode}
                            forceCompact={isCompact}
                            type="text"
                            onChange={handleChange}
                            ref={(e) => {
                                // @ts-ignore: should be improved, temporarily escaped
                                register(e, { required: true });
                                // @ts-ignore: should be improved, temporarily escaped
                                streetNameRef.current = e;
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
                            onChange={handleChange}
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
