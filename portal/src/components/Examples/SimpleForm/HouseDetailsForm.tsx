import React, { useContext, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "@fremtind/jkl-portal-components";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { ErrorMessage } from "@fremtind/jkl-message-box-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";

interface Props {
    onSubmit: () => void;
}

const HouseDetailsForm: React.FC<Props> = ({ onSubmit }) => {
    const { darkMode, isCompact } = useContext(ExampleContext);
    const [houseType, setHouseType] = useState<string>();
    const ref = useRef<HTMLFormElement>(null);

    useScrollIntoView({ ref });

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            style={{ position: "relative" }}
        >
            <aside style={{ position: "absolute", top: "-150px" }} ref={ref} />
            <RadioButtons
                choices={["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"]}
                legend="Hvilken boligtype?"
                name="housetype"
                onChange={(e) => setHouseType(e.target.value)}
                selectedValue={houseType}
                className={
                    isCompact ? "jkl-spacing--bottom-1 jkl-spacing--top-2" : "jkl-spacing--bottom-2 jkl-spacing--top-3"
                }
                variant="large"
            />

            <AnimatePresence>
                {houseType === "Enebolig" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                    >
                        <ErrorMessage title="Vi forsikrer ikke eneboliger">
                            Fordi vi ville vise en alternativ sti her så har vi lagt inn denne tulleregelen. Kontakt
                            nærmeste person for å få vite mer om dette.
                        </ErrorMessage>
                    </motion.div>
                )}
            </AnimatePresence>
            {houseType !== "Enebolig" && (
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

export default HouseDetailsForm;
