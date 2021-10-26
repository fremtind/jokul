import React, { useContext, useState, useEffect, VFC } from "react";
import { AnimatePresence } from "framer-motion";
import { TertiaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "../../../../doc-utils";

import PersonalInfoForm from "./SimpleForm/PersonalInfoForm";
import AddressForm from "./SimpleForm/AddressForm";
import HouseDetailsForm from "./SimpleForm/HouseDetailsForm";

const SimpleForm: VFC = () => {
    const [showAddress, setShowAddress] = useState(false);
    const [showHouseDetails, setShowHouseDetails] = useState(false);
    const { registerKnobs } = useContext(ExampleContext);

    useEffect(() => {
        if (registerKnobs) {
            registerKnobs([
                <TertiaryButton onClick={() => location.reload()} key="reset">
                    Reset
                </TertiaryButton>,
            ]);
        }
    }, [registerKnobs]);

    return (
        <section>
            <h1 className="jkl-title jkl-spacing-2xl--top jkl-spacing-xl--bottom">Liksomskjema</h1>
            <p className="jkl-heading-2 jkl-spacing-xl--bottom">
                Har du husforsikring får du erstatning slik at du kan reparere eller bygge nytt hvis noe skjer med
                boligen din.
            </p>
            <PersonalInfoForm onSubmit={setShowAddress} />
            <AnimatePresence>{showAddress && <AddressForm onSubmit={setShowHouseDetails} />}</AnimatePresence>
            <AnimatePresence>
                {showHouseDetails && <HouseDetailsForm onSubmit={() => console.log("yeah")} />}
            </AnimatePresence>
        </section>
    );
};

export default SimpleForm;
