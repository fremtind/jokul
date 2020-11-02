import React from "react";
import { isValidRegistreringsnummer } from "../src";

import "./index.scss";

const IsValidRegistreringsnummerExample = () => {
    return (
        <section>
            <p>
                isValidRegistreringsnummer({`"AB12345"`}) = {isValidRegistreringsnummer("AB12345").toString()}
            </p>
            <br />
            <p>
                isValidRegistreringsnummer({`"A123456"`}) = {isValidRegistreringsnummer("A123456").toString()}
            </p>
        </section>
    );
};

export default IsValidRegistreringsnummerExample;
