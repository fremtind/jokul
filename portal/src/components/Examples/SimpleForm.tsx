import React, { useLayoutEffect, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TertiaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "@fremtind/jkl-portal-components";

import PersonalInfoForm from "./SimpleForm/PersonalInfoForm";
import AddressForm from "./SimpleForm/AddressForm";
import HouseDetailsForm from "./SimpleForm/HouseDetailsForm";

const SimpleForm = () => {
    const [showAddress, setShowAddress] = useState(false);
    const [showHouseDetails, setShowHouseDetails] = useState(false);
    const { registerKnobs } = useContext(ExampleContext);

    useLayoutEffect(() => {
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
            <h1 className="jkl-title-large jkl-spacing--top-3 jkl-spacing--bottom-2">Liksomskjema</h1>
            <p className="jkl-lead jkl-spacing--bottom-2">
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
