import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "../../../../../doc-utils";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { ErrorMessageBox } from "@fremtind/jkl-message-box-react";
import { RadioButtonGroup, RadioButton } from "@fremtind/jkl-radio-button-react";

interface Props {
    onSubmit: () => void;
}

type FormValues = {
    housetype: string;
};

const HouseDetailsForm: React.FC<Props> = ({ onSubmit }) => {
    const { darkMode, isCompact } = useContext(ExampleContext);
    const ref = useRef<HTMLFormElement>(null);
    const { register, handleSubmit, watch } = useForm<FormValues>();
    const formData = watch();

    useScrollIntoView({ ref });

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{ position: "relative" }}
        >
            <aside style={{ position: "absolute", top: "-150px" }} ref={ref} />
            <RadioButtonGroup
                legend="Hvilken boligtype?"
                className={
                    isCompact
                        ? "jkl-spacing-l--bottom jkl-spacing-xl--top"
                        : "jkl-spacing-xl--bottom jkl-spacing-2xl--top"
                }
                variant="large"
            >
                {["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"].map((type) => (
                    <RadioButton {...register("housetype", { required: true })} key={type} label={type} value={type} />
                ))}
            </RadioButtonGroup>

            <AnimatePresence>
                {formData.housetype === "Enebolig" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={isCompact ? "jkl-spacing-l--bottom" : "jkl-spacing-xl--bottom"}
                    >
                        <ErrorMessageBox title="Vi forsikrer ikke eneboliger">
                            Fordi vi ville vise en alternativ sti her så har vi lagt inn denne tulleregelen. Kontakt
                            nærmeste person for å få vite mer om dette.
                        </ErrorMessageBox>
                    </motion.div>
                )}
            </AnimatePresence>
            {formData.housetype !== "Enebolig" && (
                <PrimaryButton
                    forceCompact={isCompact}
                    inverted={darkMode}
                    className={isCompact ? "jkl-spacing-l--bottom" : "jkl-spacing-xl--bottom"}
                >
                    Gå videre
                </PrimaryButton>
            )}
        </motion.form>
    );
};

export default HouseDetailsForm;
